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
    public class InventDoseController : ApiController
    {
        // GET: api/InventDose
        public List<InventDoseDTO> GetCurrentInvents()
        {
            return InventDoseBL.GetCurrentInvents();
        }

        // GET: api/InventDose/5
        public string Get(int id)
        {
            return "value";
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
