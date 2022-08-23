using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.InventoryDto
{
    public class AddInventoryProductDto
    {
        public int InventoryId { get; set; }

        public int ProductId { get; set; }
    }
}