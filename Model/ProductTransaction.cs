using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    public class ProductTransaction
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public List<Inventory> Inventories { get; set; }

        public ActivityClass Activity { get; set; }

        public int QuantityBefore { get; set; }

        public int QuantityAfter { get; set; }
    }
}