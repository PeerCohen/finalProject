using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class CurrentEmployeeCast
    {
        public static CurrentEmployeeDTO ToDTO(CurrentEmployee item)
        {
            return new CurrentEmployeeDTO()
            {
                Id = item.Id,
                Date = item.Date,
                DescriptionStatus = item.DescriptionStatus,
                IdEmployee = item.IdEmployee,
            };
        }
        //list to dto
        public static List<CurrentEmployeeDTO> ListToDTO(List<CurrentEmployee> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static CurrentEmployee ToDAL(CurrentEmployeeDTO item)
        {
            return new CurrentEmployee()
            {
                Id = item.Id,
                Date = item.Date,
                DescriptionStatus = item.DescriptionStatus,
                IdEmployee = item.IdEmployee,
            };
        }
        //list to dal
        public static List<CurrentEmployee> ListToDAL(List<CurrentEmployeeDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
