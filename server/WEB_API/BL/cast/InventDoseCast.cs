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
                Id = item.Id,
                IdVisiter = item.IdVisiter,
                IdEmployee = item.IdEmployee,
                Status = item.IdStatus,
                IdTable = item.IdTable,
                DateInvent = item.DateInvent,
                InventDetails = InventDetailsCast.ListToDTO(item.InventDetails.ToList())
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
                Id = item.Id,
                IdVisiter = item.IdVisiter,
                IdEmployee = item.IdEmployee,
                IdStatus = item.Status,
                DateInvent = item.DateInvent,
                IdTable = item.IdTable,
                InventDetails = InventDetailsCast.ListToDAL(item.InventDetails.ToList())
            };
        }
        //list to dal
        public static List<InventDose> ListToDAL(List<InventDoseDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
