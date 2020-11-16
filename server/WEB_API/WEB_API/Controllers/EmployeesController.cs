using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Employees")]
    public class EmployeesController : ApiController
    {
        // GET: api/Employees
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost]
        [Route("login")]
        public EmployeesDTO Login([FromBody] LoginEmployee loginEmployee)
        {
            return EmployeesBL.login(loginEmployee.Username,loginEmployee.Password);
        }

        // GET: api/Employees/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employees
        [HttpPost]
        [Route("AddNewWorker")]
        public void AddNewWorker([FromBody]EmployeesDTO employeesDTO)
        {
            EmployeesBL.Add(employeesDTO);
        }
        [HttpPost]
        [Route("RemoveWorker")]
        public void RemoveWorker([FromBody]EmployeesDTO employeesDTO)
        {
            EmployeesBL.Delete(employeesDTO);
        }
        // PUT: api/Employees/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employees/5
        public void Delete(int id)
        {
        }
    }
}
