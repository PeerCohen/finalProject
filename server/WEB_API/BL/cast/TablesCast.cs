using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class TablesCast
    {
        //one to dto
        public static TablesDTO ToDTO(Tables item)
        {
            return new TablesDTO()
            {
                Id = item.Id,
                IdServing = item.IdServing,
                Status = item.Status,
                PlaceTable = item.PlaceTable,
                CountPeople = item.CountPeople,
            };
        }

        //list to dto
        public static List<TablesDTO> ListToDTO(List<Tables> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Tables ToDAL(TablesDTO item)
        {
            return new Tables()
            {
                IdServing = item.IdServing,
                Status = item.Status,
                PlaceTable = item.PlaceTable,
                CountPeople = item.CountPeople,
                Id = item.Id,
            };
        }
        //list to dal
        public static List<Tables> ListToDAL(List<TablesDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
