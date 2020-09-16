using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/InventDose")]
    public class InventDoseController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        // GET: api/InventDose
        public List<InventDoseDTO> GetCurrentInvents()
        {
            return InventDoseBL.GetCurrentInvents();
        }
        
        [HttpGet]
        [Route("GetInvent/{id}")]
        public List<InventDoseDTO> Get(int id)
        {
            return InventDoseBL.GetById(id);
        }

        // POST: api/InventDose
        public void Post([FromBody]InventDoseDTO inventDose)
        {
            InventDoseBL.Add(inventDose);
        }

        // PUT: api/InventDose/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/InventDose/5
        public void Delete(int id)
        {
        }
    }
}
