using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models;

namespace Test.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {

        ApplicationContext db;
        public UserController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Topic> Get()
        {
            //List<topic> boof = db.Topics.ToList();
            //foreach (var item in boof)
            //{
            //    Console.WriteLine(item.topic);
            //}
            return db.Topics.ToList();
        }

        [HttpGet("{id}")]
        public Mess Get(int id)
        {
            Mess mess = db.Messages.Include(x => x.user).Include(x => x.topic).Where(x => x.Id == id).LastOrDefault();
            //Console.WriteLine(mess);
            return mess;
        }
        [HttpPost]  
        public IActionResult Post([FromBody]Form form)
        {
            if (ModelState.IsValid)
            {
                User user = db.Users.LastOrDefault(x => x.email == form.email && x.phone == form.phone);
                if (user == null)
                {
                    user = new User(form.name, form.email, form.phone);
                    db.Users.Add(user);
                }

                Topic topic = db.Topics.LastOrDefault(x => x.topic == form.topic);

                Mess mess = new Mess(user, topic, form.mess);
                db.Messages.Add(mess);
                db.SaveChanges();   

                return Ok(mess.Id);
            }
            return BadRequest(ModelState);
        }
    }
}