using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Data;
using Inventory_Management.Dto.InventoryDto.ProductDto;
using Inventory_Management.Dto.ProductDto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Inventory_Management.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public ProductService(IMapper mapper, DataContext context)
     {
        _mapper = mapper;
        _context = context;
     }

        public async Task<ServiceResponse<List<GetProductDto>>> AddProduct(AddProductDto newProduct)
        {
           var response = new ServiceResponse<List<GetProductDto>>();
            
            


            Product product = _mapper.Map<Product>(newProduct);

            Product testProduct = await _context.Products.FirstOrDefaultAsync(p => p.Name == product.Name);

            if (testProduct == null)
            {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            response.Data = await _context.Products.Select(p => _mapper.Map<GetProductDto>(p)).ToListAsync();
            }
            else 
            {
                response.Success = false;
                response.Message = "There is Already a Product with this Name";
            }

            return response;

        }

        public async Task<ServiceResponse<List<GetProductDto>>> DeleteProduct(int id)
        {
            var response = new ServiceResponse<List<GetProductDto>>();

            try
            {
                Product product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
                if (product != null)
                {
                    _context.Products.Remove(product);
                    await _context.SaveChangesAsync();
                    response.Data = _context.Products.Select(p => _mapper.Map<GetProductDto>(p)).ToList();
                }
            }
            catch(Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }

            return response;

        }

        public async Task<ServiceResponse<List<GetProductDto>>> GetAllProducts()
        {
            var response = new ServiceResponse<List<GetProductDto>>();
            var dbProduct = await _context.Products.ToListAsync();

            response.Data = dbProduct.Select(p => _mapper.Map<GetProductDto>(p)).ToList();

            return response;
        }

        public async Task<ServiceResponse<GetProductDto>> GetSingleProduct(int id)
        {
            var response = new ServiceResponse<GetProductDto>();

            var dbProduct = await _context.Products.Include(p => p.Inventories).FirstOrDefaultAsync(p => p.Id == id);

            if (dbProduct == null)
            {
                response.Success = false;
                response.Message = $"Product with id: {id} was not found!";
            }

            response.Data = _mapper.Map<GetProductDto>(dbProduct);

            return response;

        }

        public Task<ServiceResponse<List<GetProductDto>>> UpdateProduct()
        {
            throw new NotImplementedException();
        }
    }
}