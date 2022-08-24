using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.TransactionsDto;

namespace Inventory_Management.Services.InventoryTransactionService
{
    public interface IInventoryTransactionServices
    {
        Task<ServiceResponse<List<GetInventoryTransactionDto>>> GetAllInventoryTransactions();

        Task<ServiceResponse<GetInventoryTransactionDto>> GetInventoryTransactionById(int Id);

        Task<ServiceResponse<List<GetInventoryTransactionDto>>> AddInventoryTransaction(AddInventoryTransactionDto newInventoryTransaction);

    }
}