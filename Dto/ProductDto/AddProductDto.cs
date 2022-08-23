using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Management.Dto.InventoryDto;
using Inventory_Management.Model;

namespace Inventory_Management.Dto.ProductDto
{
    public class AddProductDto
    {

        public string Name { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public int Price { get; set; }

        public List<GetInventoryDto> Inventory { get; set; }

    }
}