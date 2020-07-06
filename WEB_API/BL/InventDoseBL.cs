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
   public static class InventDoseBL
    {
        public static List<InventDoseDTO> GetAll()
        {
            return InventDoseCast.ListToDTO(InventDoseDAL.GetAll());
        }

        public static void Update(InventDoseDTO employeesTypes)
        {
            InventDoseDAL.Update(InventDoseCast.ToDAL(employeesTypes));
        }
        public static void Delete(InventDoseDTO employeesTypes)
        {
            InventDoseDAL.Delete(InventDoseCast.ToDAL(employeesTypes));
        }
        public static InventDoseDTO GetById(int id)
        {
            return InventDoseCast.ToDTO(InventDoseDAL.GetById(id));
        }
        public static void Add(InventDoseDTO employeesTypes)
        {
            InventDoseDAL.Add(InventDoseCast.ToDAL(employeesTypes));
        }
    }
}
