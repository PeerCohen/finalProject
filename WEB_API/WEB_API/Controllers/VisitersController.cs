using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEB_API.Controllers
{
    public class VisitersController : ApiController
    {
        // GET: api/Visiters
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Visiters/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Visiters
        public void Post([FromBody]string value)
        {
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
