using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.TransactionsDto;

namespace Inventory_Management.Services.ProductTransactionsServices
{
    public interface IProductTransactionService
    {
        Task<ServiceResponse<List<GetProductTransactionDto>>> GetAllInventoryTransactions();

        Task<ServiceResponse<GetProductTransactionDto>> GetInventoryTransactionById(int Id);

        Task<ServiceResponse<List<GetProductTransactionDto>>> AddInventoryTransaction(AddProductTransactionDto newInventoryTransaction);
    }
}