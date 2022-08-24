using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.TransactionsDto;
using Inventory_Management.Services.InventoryTransactionService;
using Microsoft.AspNetCore.Mvc;

namespace Inventory_Management.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryTransactionController : ControllerBase
    {
        private readonly IInventoryTransactionServices _inventoryTransactionService;

        public InventoryTransactionController(IInventoryTransactionServices inventoryTransactionService)
        {
            _inventoryTransactionService = inventoryTransactionService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetInventoryTransactionDto>>>> Get()
        {
            return Ok( await _inventoryTransactionService.GetAllInventoryTransactions());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetInventoryTransactionDto>>> GetInventoryTransactionById(int id)
        {
            return Ok(await _inventoryTransactionService.GetInventoryTransactionById(id));
        }

        [HttpPost]

        public async Task<ActionResult<ServiceResponse<List<GetInventoryTransactionDto>>>> AddInventoryTransaction(AddInventoryTransactionDto newInventoryTransaction)
        {
            return Ok(await _inventoryTransactionService.AddInventoryTransaction(newInventoryTransaction));
        }
    }
}