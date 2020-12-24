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
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.VipTables.ToList();
            }
        }
        //get by id
        public static VipTables GetById(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.VipTables.Find(id);
            }


        }
        //add
        public static void Add(VipTables vipTables)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.VipTables.Add(vipTables);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(VipTables vipTables)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Entry(vipTables).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(VipTables vipTables)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.VipTables.Remove(vipTables);
                db.SaveChanges();
            }
        }
    }
}

