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

        public static void Update(InventDoseDTO InventDose)
        {
            InventDoseDAL.Update(InventDoseCast.ToDAL(InventDose));
        }

        public static List<InventDoseDTO> GetCurrentInvents()
        {
            StatusDoseDTO status = StatusDoseBL.GetByDescription("הוזמן");
            List<InventDose> invents = InventDoseDAL.GetAll().
                Where(invent => invent.IdStatus == status.IdDose).ToList();
            return InventDoseCast.ListToDTO(invents);
        }

        public static void Delete(InventDoseDTO InventDose)
        {
            InventDoseDAL.Delete(InventDoseCast.ToDAL(InventDose));
        }
        public static InventDoseDTO GetById(int id)
        {
            return InventDoseCast.ToDTO(InventDoseDAL.GetById(id));
        }
        public static void Add(InventDoseDTO InventDose)
        {
            InventDoseDAL.Add(InventDoseCast.ToDAL(InventDose));
        }
    }
}
