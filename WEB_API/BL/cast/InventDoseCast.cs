using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class InventDoseCast
    {
        //one to dto
        public static InventDoseDTO ToDTO(InventDose item)
        {
            return new InventDoseDTO()
            {
                IdDose=item.IdDose,
                IdChef = item.IdChef,
                Status = item.Status,
                IdTable = item.IdTable,
                HourInvention = item.HourInvention,
                Id = item.Id
            };
        }

        //list to dto
        public static List<InventDoseDTO> ListToDTO(List<InventDose> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static InventDose ToDAL(InventDoseDTO item)
        {
            return new InventDose()
            {
                IdDose = item.IdDose,
                IdChef = item.IdChef,
                Status = item.Status,
                IdTable = item.IdTable,
                HourInvention = item.HourInvention,
                Id = item.Id
            };
        }
        //list to dal
        public static List<InventDose> ListToDAL(List<InventDoseDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
