using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.TransactionsDto
{
    public class AddInventoryTransactionDto
    {

        public int InventoryId { get; set; }


        public ActivityClass Activity { get; set; }

        public int Quantity { get; set; }
    }
}