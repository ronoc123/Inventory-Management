using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.TransactionsDto;
using Inventory_Management.Services.ProductTransactionsServices;
using Microsoft.AspNetCore.Mvc;

namespace Inventory_Management.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductTransactionController : ControllerBase
    {

        private readonly IProductTransactionService _productTransactionService;

        public ProductTransactionController(IProductTransactionService productTransactionServices)
        {
            _productTransactionService = productTransactionServices;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetProductTransactionDto>>>> get()
        {

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetProductTransactionDto>>> GetSingle(int id)
        {

        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetProductTransactionDto>>>> AddProductTransaction()
        {
            
        }


    }
}