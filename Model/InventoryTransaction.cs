using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    public class InventoryTransaction
    {
        public int Id { get; set; }

        public int InventoryId { get; set; }

        public decimal Price { get; set; }

        public Inventory Inventory { get; set; }

        public ActivityClass Activity { get; set; }

        public int QuantityBefore { get; set; }

        public int QuantityAfter { get; set; }

        public DateTime Date { get; set; } = DateTime.Today;


    }
}