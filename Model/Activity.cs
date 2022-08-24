using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ActivityClass
    {
        Purchase = 1, Sell = 2, Produce = 3
    }
}