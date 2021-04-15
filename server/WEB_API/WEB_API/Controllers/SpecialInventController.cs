using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;


namespace WEB_API.Controllers
{
    [RoutePrefix("api/SpecialInvent")]
    public class SpecialInventController : ApiController
    {
        [HttpGet]
        [Route("GetAllSpecialInvent")]
        public List<SpecialInventDTO> GetAllSpecialInvent()
        {
            var s= InventDoseBL.GetAllSpecialInvent();
            return s; 
        }

        public void Delete(int id)
        {
        }
        [HttpPost]
        [Route("deleteSpecialInvent")]
        public void deleteSpecialOrder([FromBody]SpecialInventDTO specialInvent)
        {
            InventDoseBL.DeleteSpecialInvent(specialInvent);
        }
        [HttpPost]
        [Route("updateSpecialInvent")]
        public void updateSpecialOrder([FromBody]SpecialInventDTO specialInvent)
        {
            InventDoseBL.updateSpecialInvent(specialInvent);
        }
        [HttpPost]
        [Route("AddSpecialInvent")]
        public void Add([FromBody]SpecialInventDTO specialInvent)
        {
             InventDoseBL.AddSpecialInvent(specialInvent);
        }
    }
}
