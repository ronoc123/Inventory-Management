using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Data;
using Inventory_Management.Dto.TransactionsDto;
using Microsoft.EntityFrameworkCore;

namespace Inventory_Management.Services.ProductTransactionsServices
{
    public class ProductTransactionsService : IProductTransactionService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ProductTransactionsService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<ServiceResponse<List<GetProductTransactionDto>>> AddInventoryTransaction(AddProductTransactionDto newInventoryTransaction)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<GetProductTransactionDto>>> GetAllInventoryTransactions()
        {
            var response = new ServiceResponse<List<GetProductTransactionDto>>();

            var dbProductTransactions = await _context.ProductTransactions.ToListAsync();
            response.Data = dbProductTransactions.Select(t => _mapper.Map<GetProductTransactionDto>(t)).ToList();


            return response;
        }

        public Task<ServiceResponse<GetProductTransactionDto>> GetInventoryTransactionById(int Id)
        {
            throw new NotImplementedException();
        }
    }
}