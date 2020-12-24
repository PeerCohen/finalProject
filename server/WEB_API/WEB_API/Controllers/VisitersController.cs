using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WEB_API.Models;
using System.Net.Mail;
using Microsoft.AspNet.SignalR.Messaging;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Visiters")]
    public class VisitersController : ApiController
    {

        //GET: api/Visiters
        [HttpGet]
        [Route("GetVisiterById/{id}")]
        public VisitersDTO Get(int id)
        {
            return VisitersBL.GetById(id);
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
        [HttpGet]
        [Route("sendMail")]
        public void sendMail(string mailAddress)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");


                mail.From = new MailAddress("2meatRestaurant.gmail.com");
                mail.To.Add("pcohen853@gmail.com");
                mail.Subject = "Test Mail";
                mail.Body = "This is for testing SMTP mail from GMAIL";

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("username", "password");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
            }
            catch (Exception ex)
            {
               
            }
        }
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
        [Route("SingeIn/{name}/{password}")]
        public IHttpActionResult GETSingeIn(string name, string password)
        {
            return Ok(EmployeesBL.SineIn(name, password));
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
