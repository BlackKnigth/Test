using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class Mess
    {
        public Mess()
        {
        }

        public Mess(User user, Topic topic, string mess)
        {
            this.user = user;
            this.topic = topic;
            this.mess = mess;
        }

        public Mess(int id, int? userId, User user, int? topicId, Topic topic, string mess)
        {
            Id = id;
            this.userId = userId;
            this.user = user;
            this.topicId = topicId;
            this.topic = topic;
            this.mess = mess;
        }

        public int Id { get; set; }

        public int? userId { get; set; }
        public User user { get; set; }

        public int? topicId { get; set; }
        public Topic topic { get; set; }

        public string mess { get; set; }
    }
}
