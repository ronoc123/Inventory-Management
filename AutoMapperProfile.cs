using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;

using Inventory_Management.Dto.TransactionsDto;

namespace Inventory_Management
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {

            CreateMap<Inventory, GetInventoryDto>();

            CreateMap<GetInventoryDto, Inventory>();
            CreateMap<AddInventoryDto, Inventory>();
            CreateMap<Inventory, AddInventoryDto>();
            CreateMap<UpdateInventoryDto, GetInventoryDto>();
            CreateMap<InventoryTransaction, AddInventoryTransactionDto>();
            CreateMap<AddInventoryTransactionDto, InventoryTransaction>();
            CreateMap<InventoryTransaction, GetInventoryTransactionDto>();
            CreateMap<GetInventoryTransactionDto, InventoryTransaction>();



             

            








        }
    }
}