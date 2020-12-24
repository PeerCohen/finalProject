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
    public static class EmployeesTypesBL
    {
        public static List<EmployeesTypesDTO> GetAll()
        {
            return EmployeesTypesCast.ListToDTO(EmployeesTypesDAL.GetAll());
        }

        public static void Update(EmployeesTypesDTO employeesTypes)
        {
            EmployeesTypesDAL.Update(EmployeesTypesCast.ToDAL(employeesTypes));
        }
        public static void Delete(EmployeesTypesDTO employeesTypes)
        {
            EmployeesTypesDAL.Delete(EmployeesTypesCast.ToDAL(employeesTypes));
        }
        public static EmployeesTypesDTO GetById(int id) 
        {
            return EmployeesTypesCast.ToDTO(EmployeesTypesDAL.GetById(id));
        }
        public static void Add(EmployeesTypesDTO employeesTypes)
        {
            EmployeesTypesDAL.Add(EmployeesTypesCast.ToDAL(employeesTypes));
        }
    }
}
