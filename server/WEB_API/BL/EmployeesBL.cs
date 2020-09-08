using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using BL.cast;
using System.Runtime.Remoting.Messaging;

namespace BL
{
   public static class EmployeesBL
    {
        public static List<EmployeesDTO> GetAll()
        {
            return EmployeesCast.ListToDTO(EmployeesDAL.GetAll());
        }

        public static void Update(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Update(EmployeesCast.ToDAL(employeesTypes));
        }
        public static void Delete(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Delete(EmployeesCast.ToDAL(employeesTypes));
        }
        public static EmployeesDTO GetById(int id) 
        {
            return EmployeesCast.ToDTO(EmployeesDAL.GetById(id));
        }
        public static void Add(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Add(EmployeesCast.ToDAL(employeesTypes));
        }

        public static EmployeesDTO login(string username,string password)
        {
            return EmployeesCast.ToDTO(EmployeesDAL.Login(username, password));
        }
    }
}
