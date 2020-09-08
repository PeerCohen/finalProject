using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class VipTablesCast
    {
        //one to dto
        public static VipTablesDTO ToDTO(VipTables item)
        {
            return new VipTablesDTO()
            {
                Id = item.Id,
                IdTable = item.IdTable,
                IdVisiter = item.IdVisiter,
                Date = item.Date,
                DateTimeStart = item.DateTimeStart,
                IdServing = item.IdServing,
                CountPeople = item.CountPeople
            };
        }

        //list to dto
        public static List<VipTablesDTO> ListToDTO(List<VipTables> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static VipTables ToDAL(VipTablesDTO item)
        {
            return new VipTables()
            {
                Id = item.Id,
                IdTable = item.IdTable,
                IdVisiter = item.IdVisiter,
                Date = item.Date,
                DateTimeStart = item.DateTimeStart,
                IdServing = item.IdServing,
                CountPeople = item.CountPeople
            };
        }
        //list to dal
        public static List<VipTables> ListToDAL(List<VipTablesDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
