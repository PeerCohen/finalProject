using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class StatusDoseDAL
    {
        //get all
        public static List<StatusDose> GetAll()
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.StatusDose.ToList();
            }
        }
        //get by id
        public static StatusDose GetById(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.StatusDose.Find(id);
            }


        }
        //add
        public static void Add(StatusDose statusDose)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.StatusDose.Add(statusDose);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(StatusDose statusDose)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Entry(statusDose).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(StatusDose statusDose)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.StatusDose.Remove(statusDose);
                db.SaveChanges();
            }
        }
    }
}

