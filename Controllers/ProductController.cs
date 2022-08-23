using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto.ProductDto;
using Inventory_Management.Dto.ProductDto;
using Inventory_Management.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace Inventory_Management.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }


        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetProductDto>>>> Get()
        {
            return Ok(await _productService.GetAllProducts());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetProductDto>>> GetSingle(int id)
        {
            return Ok(await _productService.GetSingleProduct(id));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<List<GetProductDto>>>> Delete(int id)
        {
            var response = await _productService.DeleteProduct(id);
            if (response == null)
            {
                NotFound(response);
            }
            return Ok(response);
        }

        // [HttpPut]
        // public async Task<ActionResult<ServiceResponse<List<GetProductDto>>>> UpdateProduct()
        // {

        // }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetProductDto>>>> AddProduct(AddProductDto newProduct)
        {
            return Ok(await _productService.AddProduct(newProduct));
        }
    }
}