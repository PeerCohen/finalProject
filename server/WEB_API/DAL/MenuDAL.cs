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
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Menu.ToList();
            }
        }
        //get by id
        public static Menu GetById(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Menu.Find(id);
            }

        }
        //get by category
        public static List<Menu> GetByCategory(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                
                return db.Menu.Where(item => item.Category ==id).ToList();
            }

        }
        //add
        public static void Add(Menu menu)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Menu.Add(menu);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(Menu menu)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                var m = db.Menu.FirstOrDefault(p => p.Id == menu.Id);
                m.NameDose = menu.NameDose;
                m.Price = menu.Price;
                m.InventDetails = menu.InventDetails;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Menu menu)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                var m = db.Menu.FirstOrDefault(p => p.Id == menu.Id);
                db.Menu.Remove(m);
                db.SaveChanges();
            }
        }
    }
}

