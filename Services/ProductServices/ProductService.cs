using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Inventory_Management.Data;
using Inventory_Management.Dto;
using Inventory_Management.Dto.InventoryDto;
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
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            response.Data = await _context.Products.Select(p => _mapper.Map<GetProductDto>(p)).ToListAsync();


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
            var dbProduct = await _context.Products.Include(p => p.Inventories).ToListAsync();

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

        public async Task<ServiceResponse<GetProductDto>> UpdateProduct(UpdateProductDto updatedProduct)
        {
            var response = new ServiceResponse<GetProductDto>();

            try
            {
                var product = await _context.Products.Include(p => p.Inventories).FirstOrDefaultAsync(p => p.Id == updatedProduct.Id);

                if (product != null)
                {
                    product.Name = updatedProduct.Name;
                    product.Quantity = updatedProduct.Quantity;
                    product.Price = updatedProduct.Price;
                    
                    await _context.SaveChangesAsync();

                    response.Data = _mapper.Map<GetProductDto>(product);
                }
                else 
                {
                    response.Success = false;
                    response.Message = $"Product with id: {updatedProduct.Id} does not exists";
                }


            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return response;
        }

        public async Task<ServiceResponse<GetProductDto>> AddInventoryProduct(AddInventoryProductDto newInventoryProduct)
        {
            var response = new ServiceResponse<GetProductDto>();

            try
            {

            var product = await _context.Products
                .Include(p => p.Inventories)
                .FirstOrDefaultAsync(p => p.Id == newInventoryProduct.ProductId);

                if (product == null)
                {
                    response.Success = false;
                    response.Message = "Product Does Not Exist";
                    return response;
                }

                var inventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == newInventoryProduct.InventoryId);

                if (inventory == null)
                {
                    response.Success = false;
                    response.Message = "Inventory was not found.";
                    return response;
                }

                product.Inventories.Add(inventory);
                await _context.SaveChangesAsync();
                response.Data = _mapper.Map<GetProductDto>(product);

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

    }
}