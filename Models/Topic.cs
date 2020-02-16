using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class Topic
    {


        public Topic(string topic)
        {
            this.topic = topic;
        }

        public Topic(int Id, string topic)
        {
            this.Id = Id;
            this.topic = topic;
        }

        public int Id { get; set; }
        public string topic { get; set; }
    }
}
