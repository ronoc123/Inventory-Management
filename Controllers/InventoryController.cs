using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;
using Microsoft.AspNetCore.Authorization;

using Inventory_Management.Services.InventoryManagement;
using Microsoft.AspNetCore.Mvc;

namespace Inventory_Management.Controllers
{   
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : Controller
    {
        
        private readonly IInventoryService _inventoryService;

        public InventoryController(IInventoryService productService)
        {
            _inventoryService = productService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetInventoryDto>>>> GetAllInventory()
        {
            return Ok(await _inventoryService.GetAllInventorys());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetInventoryDto>>> GetSingleInventory(int id)
        {
            return Ok(await _inventoryService.GetSingleInventory(id));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<List<GetInventoryDto>>>> DeleteInventory(int id)
        {
            var response = await _inventoryService.DeleteInventory(id);

            if (response == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetInventoryDto>>>> AddInventory(AddInventoryDto newInventory)
        {
            return Ok(await _inventoryService.AddInventory(newInventory));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<GetInventoryDto>>> UpdateInventory(UpdateInventoryDto updatedInventory)
        {
            var response = await _inventoryService.UpdateInventory(updatedInventory);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }




    }
}