using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class CurrentEmployeeDAL
    {
        //get all
        public static List<CurrentEmployee> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.CurrentEmployee.ToList();
            }
        }
        //get by id
        public static CurrentEmployee GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.CurrentEmployee.Find(id);
            }


        }
        //add
        public static void Add(CurrentEmployee currentEmployee)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.CurrentEmployee.Add(currentEmployee);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(CurrentEmployee currentEmployee)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(currentEmployee).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(CurrentEmployee currentEmployee)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.CurrentEmployee.Remove(currentEmployee);
                db.SaveChanges();
            }
        }
    }
}

