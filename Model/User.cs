using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Management.Model
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; } = string.Empty;

        // [Required]
        // public string Role { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }


    }
}