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
                IdStatusDose = item.IdStatusDose,
                IdTable = item.IdTable,
                DateInvent = item.DateInvent,
                InventDetails = InventDetailsCast.ListToDTO(item.InventDetails.ToList())
            };
        }
        //for special
        public static SpecialInventDTO ToDTOSpecial(SpecialInvent item)
        {
            return new SpecialInventDTO()
            {
                Id = item.Id,
                CountOfPeople = item.CountOfPeople,
                dateEvent = item.dateEvent,
                kindOfevent = item.kindOfevent,
                mail = item.mail,
                name = item.name,
                phone = item.phone,

            };
        }
        //list to dto
        public static List<InventDoseDTO> ListToDTO(List<InventDose> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //for special
        public static List<SpecialInventDTO> ListToDTOSpecial(List<SpecialInvent> list)
        {
            return list.Select(x => ToDTOSpecial(x)).ToList();
        }
        //one to dal
        public static InventDose ToDAL(InventDoseDTO item)
        {
            return new InventDose()
            {
                Id = item.Id,
                IdVisiter = item.IdVisiter,
                IdEmployee = item.IdEmployee,
                IdStatusDose = item.IdStatusDose,
                DateInvent = item.DateInvent,
                IdTable = item.IdTable,
                InventDetails = InventDetailsCast.ListToDAL(item.InventDetails.ToList())
            };
        }

        public static SpecialInvent ToDALSpecialInvent(SpecialInventDTO item)
        {
            return new SpecialInvent()
            {
                Id = item.Id,
                CountOfPeople = item.CountOfPeople,
                dateEvent = item.dateEvent,
                kindOfevent = item.kindOfevent,
                mail = item.mail,
                name = item.name,
                phone = item.phone,
            };
        }
        //list to dal
        public static List<InventDose> ListToDAL(List<InventDoseDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
