using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class TablesDAL
    {
        //get all
        public static List<Tables> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Tables.ToList();
            }
        }
        //get by id
        public static Tables GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Tables.Find(id);
            }


        }
        //add
        public static void Add(Tables tables)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Tables.Add(tables);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(Tables tables)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(tables).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Tables tables)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Tables.Remove(tables);
                db.SaveChanges();
            }
        }
    }
}
