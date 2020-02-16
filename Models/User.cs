using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class User
    {
        public User(string name, string email, string phone)
        {
            this.name = name;
            this.email = email;
            this.phone = phone;
        }

        public User(int Id, string name, string email, string phone)
        {
            this.Id = Id;
            this.name = name;
            this.email = email;
            this.phone = phone;
        }

        public int Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    }
}