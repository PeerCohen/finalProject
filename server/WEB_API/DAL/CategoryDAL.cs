using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class CategoryDAL
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
                db.Entry(Category).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Category Category)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Category.Remove(Category);
                db.SaveChanges();
            }
        }
    }
}
