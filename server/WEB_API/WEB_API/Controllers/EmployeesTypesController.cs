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
    public class EmployeesTypesController : ApiController
    {
        // GET: api/EmployeesTypes
        public List<EmployeesTypesDTO> Get()
        {
            return EmployeesTypesBL.GetAll();
        }

        // GET: api/EmployeesTypes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/EmployeesTypes
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/EmployeesTypes/5
        public void Put(int id, [FromBody]EmployeesTypesDTO employeesType)
        {
            EmployeesTypesBL.Update(employeesType);
        }

        // DELETE: api/EmployeesTypes/5
        public void Delete(int id)
        {
        }
    }
}
