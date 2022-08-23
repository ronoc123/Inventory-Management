using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    public class Transaction
    {
        public int Id { get; set; }

        public string ProductName { get; set; } = string.Empty;

        public int StartingQuantity { get; set; }

        public int FinishingAmount { get; set; }

        public ActivityClass Activity { get; set; }
    }
}