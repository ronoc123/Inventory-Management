using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Dto.TransactionsDto
{
    public class GetInventoryTransactionDto
    {
        public int Id { get; set; }
       
        public int inventoryId { get; set; }

        public ActivityClass Activity { get; set; }

        public int QuantityBefore { get; set; }

        public int QuantityAfter { get; set; }

    }
}