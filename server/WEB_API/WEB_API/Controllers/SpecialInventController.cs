using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace WEB_API.Controllers
{
    public class SpecialInventController : ApiController
    {
        [HttpGet]
        [Route("GetAllSpecialInvent")]
        public List<SpecialInventDTO> GetAllSpecialInvent()
        {
            return MenuBL.GetAll();
        }
    }
}
