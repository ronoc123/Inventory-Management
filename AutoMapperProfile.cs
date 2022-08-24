using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;
using Inventory_Management.Dto.InventoryDto.ProductDto;
using Inventory_Management.Dto.ProductDto;
using Inventory_Management.Dto.TransactionsDto;

namespace Inventory_Management
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, GetProductDto>();
            CreateMap<Inventory, GetInventoryDto>();
            CreateMap<AddProductDto, Product>();
            CreateMap<GetInventoryDto, Inventory>();
            CreateMap<AddInventoryDto, Inventory>();
            CreateMap<Inventory, AddInventoryDto>();
            CreateMap<UpdateInventoryDto, GetInventoryDto>();
            CreateMap< InventoryTransaction, AddInventoryTransactionDto>();
            CreateMap< AddInventoryTransactionDto, InventoryTransaction>();

            CreateMap<InventoryTransaction, GetInventoryTransactionDto>();
            CreateMap<GetInventoryTransactionDto, InventoryTransaction>();

        }
    }
}