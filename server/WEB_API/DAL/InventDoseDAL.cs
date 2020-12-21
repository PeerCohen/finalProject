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
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.InventDose.Include("InventDetails").ToList();
            }
        }
        public static List<SpecialInvent> GetAllSpecialInvent()
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.SpecialInvent.ToList();
            }
        }
        //get by id
        public static List<InventDose> GetById(int id)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                var invents = db.InventDose.Where(v => v.IdVisiter == id).Include("InventDetails").ToList();
                invents.ForEach(v =>v.InventDetails = v.InventDetails.ToList());
                return invents;
            }
        }
        //add
        public static InventDose Add(InventDose inventDose)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                inventDose.DateInvent = DateTime.Now;
               var inventDose1 = db.InventDose.Add(inventDose);
                db.SaveChanges();
                //foreach (var item in inventDose.InventDetails)
                //{
                //    item.InventDose = null;
                //    item.IdDose = inventDose1.Id;
                //    db.InventDetails.Add(item);
                //    db.SaveChanges();
                //}
                //db.InventDetails.AddRange(db.InventDetails);
                db.SaveChanges();
                return inventDose;
            }
        }
        //update
        public static void Update(InventDose inventDose)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Entry(inventDose).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(InventDose inventDose)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.InventDose.Remove(inventDose);
                db.SaveChanges();
            }
        }
    }
}

