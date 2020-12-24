using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEB_API.Controllers
{
    public class VipTablesController : ApiController
    {
        // GET: api/VipTables
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/VipTables/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/VipTables
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/VipTables/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/VipTables/5
        public void Delete(int id)
        {
        }
    }
}
