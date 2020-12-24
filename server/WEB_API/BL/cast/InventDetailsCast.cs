using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    static class InventDetailsCast
    {
        //one to dto
        public static InventDetailsDTO ToDTO(InventDetails item)
        {
            return new InventDetailsDTO()
            {
                IdDose = item.IdDose,
                IdMenu = item.IdMenu,
                Amount = item.amount
            };
        }

        //list to dto
        public static List<InventDetailsDTO> ListToDTO(List<InventDetails> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static InventDetails ToDAL(InventDetailsDTO item)
        {
            return new InventDetails()
            {
                IdDose = item.IdDose,
                IdMenu = item.IdMenu,
                amount = item.Amount
            };
        }
        //list to dal
        public static List<InventDetails> ListToDAL(List<InventDetailsDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
