using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using BL.cast;

namespace BL
{
   public class CategoryBL
    {
      

        public static List<CategoryDTO> GetAll()
        {
            return CategoryCast.ListToDTO(CategoryDAL.GetAll());
        }

        public static void Update(CategoryDTO category)
        {
            CategoryDAL.Update(CategoryCast.ToDAL(category));
        }
        public static void Delete(CategoryDTO category)
        {
            CategoryDAL.Delete(CategoryCast.ToDAL(category));
        }
        public static CategoryDTO GetById(int id)
        {
            return CategoryCast.ToDTO(CategoryDAL.GetById(id));
        }
     
        public static void Add(CategoryDTO category)
        {
            CategoryDAL.Add(CategoryCast.ToDAL(category));
        }
        public static List<CategoryDTO> GetNewCategoryList()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                List<MenuDTO> lNewMenu = MenuBL.GetANewMenu();
                List<Category> Listnew = new List<Category>();
                foreach (var item in lNewMenu)
                {
                    var r = Listnew.FirstOrDefault(x => x.Id == item.Category);
                    if (r==null)
                    {
                        Listnew.Add(db.Category.FirstOrDefault(x => x.Id == item.Category));

                    }
                }
                //List<Category> List = db.Category.Where(x => lFNewMenu.Any(y => x.Id == y.Category)).ToList();
                return CategoryCast.ListToDTO(Listnew);
            }

        }
        public static List<CategoryDTO> GetFavoriteCategoryList()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                List<MenuDTO> lfMenu = MenuBL.GetFavoriteMenu();
                List<Category> Listnew = new List<Category>();
                foreach (var item in lfMenu)
                {
                    var r = Listnew.FirstOrDefault(x => x.Id == item.Category);
                    if (r == null)
                    {
                        Listnew.Add(db.Category.FirstOrDefault(x => x.Id == item.Category));

                    }
                }
                //List<Category> List = db.Category.Where(x => lNewMenu.Any(y => x.Id == y.Category)).ToList();
                return CategoryCast.ListToDTO(Listnew);
            }

        }
        
    }
}
