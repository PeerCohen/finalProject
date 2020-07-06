using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class MenuCast
    {
        //one to dto
        public static MenuDTO ToDTO(Menu item)
        {
            return new MenuDTO()
            {
               Id=item.Id,
               Price=item.Price,
               NameDose=item.NameDose,
               RateDose=item.RateDose,
            };
        }

        //list to dto
        public static List<MenuDTO> ListToDTO(List<Menu> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Menu ToDAL(MenuDTO item)
        {
            return new Menu()
            {
                Id = item.Id,
                Price = item.Price,
                NameDose = item.NameDose,
                RateDose = item.RateDose,
            };
        }
        //list to dal
        public static List<Menu> ListToDAL(List<MenuDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
