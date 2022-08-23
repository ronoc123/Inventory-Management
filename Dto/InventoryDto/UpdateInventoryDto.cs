using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.InventoryDto
{
    public class UpdateInventoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public int Price { get; set; }
    }
}