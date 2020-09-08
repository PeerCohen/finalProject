using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Menu")]
    public class MenuController : ApiController
    {
        // GET: api/Menu
        [HttpGet]
        [Route("GetAllMenuDetails")]
        public List<MenuDTO> GetAllMenuDetails()
        {
            return MenuBL.GetAll(); 
        }
        //קבלת רשימת תפריטים לפי שיוך קטגוריה
        [HttpGet]
        [Route("GetMenuByCategory/{id}")]
        public List<MenuDTO> GetByCategory(int id)
        {
            return MenuBL.GetByCategory(id);
        }
        // GET: api/Menu/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Menu
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Menu/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Menu/5
        public void Delete(int id)
        {
        }
    }
}
