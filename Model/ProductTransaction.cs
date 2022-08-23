using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    public class ProductTransaction
    {
        public int Id { get; set; }

        public ActivityClass Activity { get; set; }
    }
}