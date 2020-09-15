using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class VisitersDAL
    {
        
        //get all
        public static List<Visiters> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Visiters.ToList();
            }
        }
        //get by id
        public static List<Visiters> GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Visiters.Where(v => v.ld == id).ToList();
            }


        }
        //add

        public static Visiters Add(Visiters visiters)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                visiters = db.Visiters.Add(visiters);
                db.SaveChanges();
                return visiters;
            }
        }
        //update
        public static void Update(Visiters visiters)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(visiters).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Visiters visiters)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Visiters.Remove(visiters);
                db.SaveChanges();
            }
        }
    }
}

