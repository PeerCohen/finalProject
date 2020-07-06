using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class InventDoseDAL
    {
        //get all
        public static List<InventDose> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.InventDose.ToList();
            }
        }
        //get by id
        public static InventDose GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.InventDose.Find(id);
            }


        }
        //add
        public static void Add(InventDose inventDose)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.InventDose.Add(inventDose);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(InventDose inventDose)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(inventDose).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(InventDose inventDose)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.InventDose.Remove(inventDose);
                db.SaveChanges();
            }
        }
    }
}

