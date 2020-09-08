using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public static class EmployeesCast
    {
        //one to dto
        public static EmployeesDTO ToDTO(Employees item)
        {
            return new EmployeesDTO()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                address = item.address,
                IdEmployeeType = item.IdEmployeeType,
                Tz = item.Tz,
                Phone = item.Phone,
            };
        }
        //list to dto
        public static List<EmployeesDTO> ListToDTO(List<Employees> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Employees ToDAL(EmployeesDTO item)
        {
            return new Employees() 
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                address = item.address,
                IdEmployeeType = item.IdEmployeeType,
                Tz = item.Tz,
                Phone = item.Phone,
            };
        }
        //list to dal
        public static List<Employees> ListToDAL(List<EmployeesDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    };
}

