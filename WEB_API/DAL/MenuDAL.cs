using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class MenuDAL
    {
        
        //get all
        public static List<Menu> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Menu.ToList();
            }
        }
        //get by id
        public static Menu GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Menu.Find(id);
            }


        }
        //add
        public static void Add(Menu menu)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Menu.Add(menu);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(Menu menu)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(menu).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Menu menu)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Menu.Remove(menu);
                db.SaveChanges();
            }
        }
    }
}

