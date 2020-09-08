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
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.StatusDose.ToList();
            }
        }
        //get by id
        public static StatusDose GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.StatusDose.Find(id);
            }


        }
        //add
        public static void Add(StatusDose statusDose)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.StatusDose.Add(statusDose);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(StatusDose statusDose)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(statusDose).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(StatusDose statusDose)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.StatusDose.Remove(statusDose);
                db.SaveChanges();
            }
        }
    }
}

