using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Visiters")]
    public class VisitersController : ApiController
    {
       
        // GET: api/Visiters
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        //רישום לקוח חדש למאגר הלקוחות
        [HttpPost]
        [Route("SignUp")]
        public VisitersDTO SignUp([FromBody] SignUpVisiters signUpVisiters)
        {
            return VisitersBL.SignUp(signUpVisiters.FirstName, signUpVisiters.LastName, signUpVisiters.Mail, signUpVisiters.NameUser, signUpVisiters.Password);
        }
        //הוספת הזמנת מנה ללקוח 
        [HttpPost]
        [Route("AddDose")]
        public bool AddDose([FromBody]InventDoseDTO InventDose)
        {
           return VisitersBL.AddDose(InventDose);
        }



        // GET: api/Visiters/5
        
        
        // POST: api/Visiters
        public void Post([FromBody]string value)
        {
        }
        [HttpPost]
        [Route("login")]
        public VisitersDTO Login([FromBody] LoginVisiters loginEmployee)
        {
            if (loginEmployee.Password == null)
                return null;
            return VisitersBL.Login(loginEmployee.Username, loginEmployee.Password);
        }

        // PUT: api/Visiters/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Visiters/5
        public void Delete(int id)
        {
        }
    }
}
