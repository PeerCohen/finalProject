using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class VipTablesDAL
    {
        
        //get all
        public static List<VipTables> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.VipTables.ToList();
            }
        }
        //get by id
        public static VipTables GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.VipTables.Find(id);
            }


        }
        //add
        public static void Add(VipTables vipTables)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.VipTables.Add(vipTables);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(VipTables vipTables)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(vipTables).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(VipTables vipTables)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.VipTables.Remove(vipTables);
                db.SaveChanges();
            }
        }
    }
}

