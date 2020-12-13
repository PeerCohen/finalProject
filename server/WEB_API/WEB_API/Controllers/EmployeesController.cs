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
        [HttpGet]
        [Route("GetAllWorker")]
        public List<EmployeesDTO> GetAll()
        {
            return EmployeesBL.GetAll();
        }
        [HttpGet]
        [Route("GetDailyWorker")]
        public object GetDailyWorker()
        {
            return EmployeesBL.getDailyWorker();
        }

        [HttpPost]
        [Route("login")]
        public EmployeesDTO Login([FromBody] LoginEmployee loginEmployee)
        {
            return EmployeesBL.login(loginEmployee.Username, loginEmployee.Password);
        }

        // GET: api/Employees/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Employees
        [HttpPost]
        [Route("AddNewWorker")]
        public void AddNewWorker([FromBody] EmployeesDTO employeesDTO)
        {
            EmployeesBL.Add(employeesDTO);
        }
        [HttpPost]
        [Route("RemoveWorker")]
        public void RemoveWorker([FromBody] EmployeesDTO employeesDTO)
        {
            EmployeesBL.Delete(employeesDTO);
        }

        [HttpPut]
        [Route("SineOut/{id}")]
        public IHttpActionResult PutGetOut(int id, [FromBody] DateTime date)
        {
            return Ok(EmployeesBL.SingOut(id, date));
        }
        [HttpPost]
        [Route("AddShiftToNextWeekEmployee/{userId}")]
        public IHttpActionResult PostShifttoNextWeekEmployee([FromBody] List<calandar> listCalandar, int userId)
        {
            return Ok(EmployeesBL.AddShifttoNextWeekEmployee(listCalandar, userId));
        }
        [Route("GetEmloyeesCalandarToManger")]
        [HttpPut]
        public IHttpActionResult PUTEmloyeesCalandarToManger([FromBody] DateTime startOfWeek)
        {
            return Ok(EmployeesBL.GetEmloyeesCalandarToManger(startOfWeek));
        }
        [Route("GetEmloyeesCalandarByManaer/{idE}")]
        [HttpPut]
        public IHttpActionResult PUTEmloyeesCalandarByManaer([FromBody] DateTime startOfWeek, int idE)
        {
            return Ok(EmployeesBL.GetEmloyeesCalandarByManaer(startOfWeek , idE));
        }
        [HttpPost]
        [Route("PutShiftToEmployee/{IdUser}")]
        public IHttpActionResult POSTShiftToEmployee([FromBody] DateTime date, int IdUser)
        {
            return Ok(EmployeesBL.PutShiftToEmployee(date, IdUser));
        }
[HttpPost]
[Route("DeleteEmployeeShirt/{IdUser}")]
public IHttpActionResult POSTDeleteEmployeeShirt([FromBody] DateTime date, int IdUser)
        {
            return Ok(EmployeesBL.DeleteEmployeeShirt(date, IdUser));

        }
        [HttpPost]
        [Route("SendManagerMassegeToEmloyee")]
        public IHttpActionResult PostManagerMassegeToEmloyee([FromBody] managerMessageDTO Messege)
        {
            return Ok(EmployeesBL.SendManagerMassegeToEmloyee(Messege));

        }
        [Route("GetNumberMessege/{IdUser}")]
        public IHttpActionResult GetNumberMessege (int IdUser )
        {
            return Ok(EmployeesBL.GetNumberMessege(IdUser));
        }
        [Route("GetAllMessege/{IdUser}")]
        public IHttpActionResult GetAllMessege(int IdUser)
        {
            return Ok(EmployeesBL.GetAllMessege(IdUser));
        }
        [Route("EditReadMessege")]
        public IHttpActionResult PutAReadMessege([FromBody] managerMessageDTO messege)
        {
            return Ok(EmployeesBL.EditReadMessege(messege));
        }
    }
}
