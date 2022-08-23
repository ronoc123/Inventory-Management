using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.InventoryDto.ProductDto
{
    public class GetProductDto
    {
         public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public List<GetInventoryDto> inventories { get; set; }

    }
}