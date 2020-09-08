using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEB_API.Controllers
{
    public class TablesController : ApiController
    {
        // GET: api/Tables
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Tables/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Tables
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Tables/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Tables/5
        public void Delete(int id)
        {
        }
    }
}
