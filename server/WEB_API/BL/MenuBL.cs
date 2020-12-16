using BL.cast;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.IO;
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
        public static List<MenuDTO> GetByCategoryBestRating(int id)
        {
            var listCategoryMenu = GetByCategory(id);
            return listCategoryMenu.Where(r => r.RateDose == 5).ToList();
        }
        public static List<MenuDTO> GetByCategory(int id)
        {
            return MenuCast.ListToDTO(MenuDAL.GetByCategory(id));
        }
        public static void Add(MenuDTO menu)
        {
            int index = menu.ImageBase64.IndexOf(',');
            if (index > 0)
            {
                menu.ImageBase64 = menu.ImageBase64.Substring(index + 1);
            }
            var bytes = Convert.FromBase64String(menu.ImageBase64);
            using (var imageFile = new FileStream(
                @"C:\Users\user-pc\Documents\GitHub\finalPoject\server\WEB_API\WEB_API\src\images\products\"
                + menu.Category + @"\" + menu.image, FileMode.Create
                ))
            {
                imageFile.Write(bytes, 0, bytes.Length);
                imageFile.Flush();
            }
            MenuDAL.Add(MenuCast.ToDAL(menu));
        }
    }
}
