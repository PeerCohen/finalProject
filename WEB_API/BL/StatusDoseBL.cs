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
   public static class StatusDoseBL
    {
        public static List<StatusDoseDTO> GetAll()
        {
            return StatusDoseCast.ListToDTO(StatusDoseDAL.GetAll());
        }

        public static void Update(StatusDoseDTO employeesTypes)
        {
            StatusDoseDAL.Update(StatusDoseCast.ToDAL(employeesTypes));
        }
        public static void Delete(StatusDoseDTO employeesTypes)
        {
            StatusDoseDAL.Delete(StatusDoseCast.ToDAL(employeesTypes));
        }
        public static StatusDoseDTO GetById(int id)
        {
            return StatusDoseCast.ToDTO(StatusDoseDAL.GetById(id));
        }
        public static void Add(StatusDoseDTO employeesTypes)
        {
            StatusDoseDAL.Add(StatusDoseCast.ToDAL(employeesTypes));
        }
    }
}
