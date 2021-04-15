using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public static class EmployeesDAL
    {
        //get all
        public static List<Employees> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Employees.ToList();
            }
        }
        //get by id
        public static Employees GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.Employees.Find(id);
            }


        }
        //add
        public static void Add(Employees employees)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.Employees.Add(employees);
                db.SaveChanges();
            }
        }

        public static Employees Login(string username,string password)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
               return db.Employees.FirstOrDefault(p=>p.Password == password && p.LastName==username);
            }
        }
        //update
        public static void Update(Employees employees)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(employees).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Employees employees)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                var u = db.UserCalander.Where(x => x.IdUser == employees.Id).ToList();
                if (u != null)
                    foreach (var item in u)
                    {
                        db.UserCalander.Remove(item);
                    }
                var e = db.Employees.Single(p => p.Id == employees.Id);
                db.Employees.Remove(e);
                db.SaveChanges();
            }
        }
    }
}

