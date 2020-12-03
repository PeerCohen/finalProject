using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;

namespace WEB_API.Controllers
{
    public class CommentVisiterController : ApiController
    {
        // GET: api/CommentVisiter
        [HttpGet]
        [Route("GetAllComment")]
        //public List<CommentVisiterDTO> GetAllComment()
        //{
        //    //return CommentVisiterBL.GetAll();
        //}

        // GET: api/CommentVisiter/5
      
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CommentVisiter
        [HttpPost]
        [Route("AddComment")]
        public void AddComment([FromBody]CommentVisiterDTO commentVisiter)
        {
            //CommentVisiterBL.Add(commentVisiter);
        }

        // PUT: api/CommentVisiter/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CommentVisiter/5
        public void Delete(int id)
        {
        }
    }
}
