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
   public static class MenuBL
    {
        public static List<MenuDTO> GetAll()
        {
            return MenuCast.ListToDTO(MenuDAL.GetAll());
        }

        public static void Update(MenuDTO menu)
        {
            MenuDAL.Update(MenuCast.ToDAL(menu));
        }
        public static void Delete(MenuDTO menu)
        {
            MenuDAL.Delete(MenuCast.ToDAL(menu));
        }
        public static MenuDTO GetById(int id)
        {
            return MenuCast.ToDTO(MenuDAL.GetById(id));
        }
        public static List<MenuDTO> GetByCategory(int id)
        {
            return MenuCast.ListToDTO(MenuDAL.GetByCategory(id));
        }
        public static void Add(MenuDTO menu)
        {
            MenuDAL.Add(MenuCast.ToDAL(menu));
        }
    }
}
