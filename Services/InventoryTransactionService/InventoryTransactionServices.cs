using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Data;
using Inventory_Management.Dto.TransactionsDto;
using Microsoft.EntityFrameworkCore;

namespace Inventory_Management.Services.InventoryTransactionService
{
    public class InventoryTransactionServices : IInventoryTransactionServices
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public InventoryTransactionServices(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<ServiceResponse<List<GetInventoryTransactionDto>>> GetAllInventoryTransactions()
        {
            var response = new ServiceResponse<List<GetInventoryTransactionDto>>();

            var dbInventoryTransactions = await _context.InventoryTransactions.Include(t => t.Inventory).ToListAsync();

            response.Data = dbInventoryTransactions.Select(t => _mapper.Map<GetInventoryTransactionDto>(t)).ToList();

            return response;
        }

        public async Task<ServiceResponse<GetInventoryTransactionDto>> GetInventoryTransactionById(int Id)
        {
            var response = new ServiceResponse<GetInventoryTransactionDto>();
            
                var dbInventoryTransaction = await _context.InventoryTransactions.Include(t => t.Inventory).FirstOrDefaultAsync(t => t.Id == Id);
                response.Data = _mapper.Map<GetInventoryTransactionDto>(dbInventoryTransaction);
                return response;
        }

        public async Task<ServiceResponse<List<GetInventoryTransactionDto>>> AddInventoryTransaction(AddInventoryTransactionDto newInventoryTransaction)
        {
            var response = new ServiceResponse<List<GetInventoryTransactionDto>>();


            var inventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == newInventoryTransaction.InventoryId);
            InventoryTransaction inventoryTransaction = _mapper.Map<InventoryTransaction>(newInventoryTransaction);

            if (newInventoryTransaction.Activity == ActivityClass.Purchase)
            {    
                if (inventory == null)
                    {
                        response.Success = false;
                        response.Message = "This Inventory does not exist";
                    }

                inventoryTransaction.Inventory = inventory;
                inventoryTransaction.QuantityBefore = inventory.Quantity;
                inventoryTransaction.QuantityAfter = inventory.Quantity + newInventoryTransaction.Quantity;
                inventory.Quantity = inventory.Quantity + newInventoryTransaction.Quantity;
    
                await _context.SaveChangesAsync();
            }
            else if (newInventoryTransaction.Activity == ActivityClass.Sell && inventory.Quantity >= newInventoryTransaction.Quantity)
            {
                inventoryTransaction.Inventory = inventory;
                inventoryTransaction.QuantityBefore = inventory.Quantity;
                inventoryTransaction.QuantityAfter = inventory.Quantity - newInventoryTransaction.Quantity;
                inventory.Quantity = inventory.Quantity - newInventoryTransaction.Quantity;
                await _context.SaveChangesAsync();
            }
            else
            {
                response.Success = false;
                response.Message = "Not Enough Inventory Stock";
                return response;
            }



            _context.InventoryTransactions.Add(inventoryTransaction);
            await _context.SaveChangesAsync();
            

            response.Data = await _context.InventoryTransactions.Include(t => t.Inventory).Select(t => _mapper.Map<GetInventoryTransactionDto>(t)).ToListAsync();


            return response; 
        }


 
    }
}