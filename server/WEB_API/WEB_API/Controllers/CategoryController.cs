using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Category")]
    public class CategoryController : ApiController
    {
        // GET: api/Category
        [HttpGet]
        [Route("GetAllCategoryList")]
        public List<CategoryDTO> Get()
        {
            return CategoryBL.GetAll();
        }

        // GET: api/Category/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Category
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Category/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Category/5
        public void Delete(int id)
        {
        }
    }
}
