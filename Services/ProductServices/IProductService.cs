using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.InventoryDto.ProductDto;
using Inventory_Management.Dto.ProductDto;

namespace Inventory_Management.Services
{
    public interface IProductService
    {
        Task<ServiceResponse<List<GetProductDto>>> GetAllProducts();

        Task<ServiceResponse<GetProductDto>> GetSingleProduct(int id);

        Task<ServiceResponse<List<GetProductDto>>> AddProduct(AddProductDto newProduct);

        Task<ServiceResponse<List<GetProductDto>>> UpdateProduct();

        Task<ServiceResponse<List<GetProductDto>>> DeleteProduct(int id);




    }
}