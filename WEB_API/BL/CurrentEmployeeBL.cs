using BL.cast;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class CurrentEmployeeBL
    {
        public static List<CurrentEmployeeDTO> GetAll()
        {
            return CurrentEmployeeCast.ListToDTO(CurrentEmployeeDAL.GetAll());
        }

        public static void Update(CurrentEmployeeDTO employeesTypes)
        {
            CurrentEmployeeDAL.Update(CurrentEmployeeCast.ToDAL(employeesTypes));
        }
        public static void Delete(CurrentEmployeeDTO employeesTypes)
        {
            CurrentEmployeeDAL.Delete(CurrentEmployeeCast.ToDAL(employeesTypes));
        }
        public static CurrentEmployeeDTO GetById(int id)
        {
            return CurrentEmployeeCast.ToDTO(CurrentEmployeeDAL.GetById(id));
        }
        public static void Add(CurrentEmployeeDTO employeesTypes)
        {
            CurrentEmployeeDAL.Add(CurrentEmployeeCast.ToDAL(employeesTypes));
        }
    }
}
