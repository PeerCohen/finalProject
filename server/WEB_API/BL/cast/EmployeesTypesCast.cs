using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public static class EmployeesTypesCast
    {
        //one to dto
        public static EmployeesTypesDTO ToDTO(EmployeesTypes item)
        {
            return new EmployeesTypesDTO() { Id = item.Id, Position = item.Position };
        }
       
        //list to dto
        public static List<EmployeesTypesDTO> ListToDTO(List<EmployeesTypes> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static EmployeesTypes ToDAL(EmployeesTypesDTO item)
        {
            return new EmployeesTypes() { Id = item.Id, Position = item.Position };
        }
        //list to dal
        public static List<EmployeesTypes> ListToDAL(List<EmployeesTypesDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
