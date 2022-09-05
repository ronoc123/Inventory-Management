using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Data;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;
using Inventory_Management.Services.InventoryManagement;
using Microsoft.EntityFrameworkCore;

namespace Inventory_Management.Services.InventoryManagement
{
    public class InventoryService : IInventoryService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public InventoryService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<List<GetInventoryDto>>> AddInventory(AddInventoryDto newInventory)
        {
            var response = new ServiceResponse<List<GetInventoryDto>>();

            Inventory inventory = _mapper.Map<Inventory>(newInventory);

            _context.Inventories.Add(inventory);
            await _context.SaveChangesAsync();
            response.Data = await _context.Inventories.Select(i => _mapper.Map<GetInventoryDto>(i)).ToListAsync();

            return response;
        }

        public async Task<ServiceResponse<List<GetInventoryDto>>> DeleteInventory(int id)
        {
            var response = new ServiceResponse<List<GetInventoryDto>>();

            try 
            {
                Inventory inventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == id);
                if (inventory != null)
                {
                    _context.Inventories.Remove(inventory);
                    await _context.SaveChangesAsync();
                    response.Data = _context.Inventories.Select(i => _mapper.Map<GetInventoryDto>(i)).ToList();
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"No Inventory Found with id: {id}.";
            }
            return response;
        }

        public async Task<ServiceResponse<List<GetInventoryDto>>> GetAllInventorys()
        {
            var response = new ServiceResponse<List<GetInventoryDto>>();

            var dbInventory = await _context.Inventories.ToListAsync();

            response.Data = dbInventory.Select(i => _mapper.Map<GetInventoryDto>(i)).ToList();

            return response;
        }

        public async Task<ServiceResponse<GetInventoryDto>> GetSingleInventory(int id)
        {
            var response = new ServiceResponse<GetInventoryDto>();

            var dbInventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == id);
            response.Data = _mapper.Map<GetInventoryDto>(dbInventory);

            return response;
        }

        public async Task<ServiceResponse<GetInventoryDto>> UpdateInventory(UpdateInventoryDto updatedInventory)
        {
            var response = new ServiceResponse<GetInventoryDto>();

            try
            {
            var inventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == updatedInventory.Id);
            if (inventory != null)
            {
                inventory.Name = updatedInventory.Name;
                inventory.Quantity = updatedInventory.Quantity;


                await _context.SaveChangesAsync();

                response.Data = _mapper.Map<GetInventoryDto>(inventory);
            }
            else
            {
                response.Success = false;
                response.Message = "Inventory Not Found.";
            }

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }
    }
}