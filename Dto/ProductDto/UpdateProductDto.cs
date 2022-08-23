using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.InventoryDto;

namespace Inventory_Management.Dto.ProductDto
{
    public class UpdateProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public int Price { get; set; }
        public List<AddInventoryProductDto>? Inventories { get; set; }
    }
}