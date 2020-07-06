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

        public static void Update(MenuDTO employeesTypes)
        {
            MenuDAL.Update(MenuCast.ToDAL(employeesTypes));
        }
        public static void Delete(MenuDTO employeesTypes)
        {
            MenuDAL.Delete(MenuCast.ToDAL(employeesTypes));
        }
        public static MenuDTO GetById(int id)
        {
            return MenuCast.ToDTO(MenuDAL.GetById(id));
        }
        public static void Add(MenuDTO employeesTypes)
        {
            MenuDAL.Add(MenuCast.ToDAL(employeesTypes));
        }
    }
}
