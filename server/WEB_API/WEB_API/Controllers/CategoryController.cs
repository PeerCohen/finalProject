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
        [HttpGet]
        [Route("GetCategoryName/{id}")]
        public CategoryDTO Get(int id)
        {
            return CategoryBL.GetById(id);
        }


        // POST: api/Category
        [HttpPost]
        [Route("AddCategory")]
        public void Post([FromBody]CategoryDTO category)
        {
            CategoryBL.Add(category);
        }

        [HttpPost]
        [Route("UpdateCategory")]
        public void update([FromBody]CategoryDTO category)
        {
            CategoryBL.Update(category);
        }

        // DELETE: api/Category/5
        [HttpPost]
        [Route("DeleteCategory")]
        public void Delete([FromBody]CategoryDTO category)
        {
            CategoryBL.Delete(category);
        }
    }
}
