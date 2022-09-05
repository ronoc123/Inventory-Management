using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.InventoryDto
{
    public class AddInventoryDto
    {
        public string Name { get; set; } = string.Empty;

        public int Quantity { get; set; }

    }
}