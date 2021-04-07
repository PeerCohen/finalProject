using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CategoryDAL
    {
        //get all
        public static List<Category> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Category.ToList();
            }
        }
        //get by id
        public static Category GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Category.Find(id);
            }


        }

        //add
        public static void Add(Category Category)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Category.Add(Category);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(Category Category)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                var c = db.Category.FirstOrDefault(p => p.Id == Category.Id);
                c.nameCategory = Category.nameCategory;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Category Category)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                var m = db.Menu.FirstOrDefault(x => x.Category == Category.Id);
                if(m!=null)
                    db.Menu.Remove(m);
                var c = db.Category.FirstOrDefault(C => C.Id == Category.Id);                
                db.Category.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
