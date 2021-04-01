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
            if (menu.ImageBase64 != null)
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
            }
            MenuDAL.Add(MenuCast.ToDAL(menu));
        }
        public static   List<MenuDTO> GetANewMenu()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                //Where(u => u.DateAdded < DateTime.Today.AddDays(-8)).
                List <Menu> newM = db.Menu.Where(u => DateTime.Compare(u.DateAdded.Value, DateTime.Now ) < 8).ToList();
                return MenuCast.ListToDTO(newM);
            }
        }
        //חישוב המנות עם הדירוג הגבוהה ביתר 
        public static List<MenuDTO> GetFavoriteMenu()
         {
            using (restaurantEntities db = new restaurantEntities())
            {
                int? TotalsumRating = 0;
                int? sumRating = 0;
                List<RatingMenue> LRatingMene = new List<RatingMenue>();
                RatingMenue ratingM = new RatingMenue();
                List<Menu> menuList = db.Menu.ToList();
                foreach (var menu in menuList)
                {
                    ratingM = new RatingMenue();
                    TotalsumRating = 0;
                    sumRating = 0;
                    List<Rating> ratingList = db.Rating.Where(m => m.doseId == menu.Id).ToList();
                    foreach (var r in ratingList)
                    {
                        sumRating++;
                        TotalsumRating += r.rate;
                    }
                    if (TotalsumRating!=0)
                    {
                        ratingM.MenuID = menu.Id;
                        ratingM.Rate = TotalsumRating / sumRating;
                        LRatingMene.Add(ratingM);
                    }
                   
                }
                var c = LRatingMene.OrderByDescending(u => u.Rate).Take(5).ToList();
                List<Menu> List = new List<Menu>();
                foreach (var item in c)
                {
                    Menu m = db.Menu.FirstOrDefault(t => t.Id == item.MenuID);
                    if (List.FirstOrDefault(w => w.Id == m.Id) == null)
                        List.Add(m);
                }
                return MenuCast.ListToDTO(List);

            }
        }
        public static  List<MenuDTO> GetMenuNewByCategory(int Id)
        {
            List<MenuDTO> ListNewMenu = GetANewMenu().Where(w=>w .Category==Id).ToList();
            return ListNewMenu;
        }
        public static List<MenuDTO> GetMenuFavoriteByCategory(int Id)
        {
            List<MenuDTO> ListNewMenu = GetFavoriteMenu().Where(w => w.Category == Id).ToList();
            return ListNewMenu;
        }
        
    }
    public class RatingMenue
    {
        public int MenuID { get; set; }
        public int? Rate { get; set; }
    }
}
