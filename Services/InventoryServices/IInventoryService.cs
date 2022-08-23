using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;

namespace Inventory_Management.Services.InventoryManagement
{
    public interface IInventoryService
    {
        Task<ServiceResponse<List<GetInventoryDto>>> GetAllInventorys();

        Task<ServiceResponse<GetInventoryDto>> GetSingleInventory(int id);

        Task<ServiceResponse<List<GetInventoryDto>>> AddInventory(AddInventoryDto newInventory);

        Task<ServiceResponse<GetInventoryDto>> UpdateInventory(UpdateInventoryDto updatedInventory);

        Task<ServiceResponse<List<GetInventoryDto>>> DeleteInventory(int id);
    }
}