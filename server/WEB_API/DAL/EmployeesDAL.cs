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
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Employees.ToList();
            }
        }
        //get by id
        public static Employees GetById(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Employees.Find(id);
            }


        }
        //add
        public static void Add(Employees employees)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Employees.Add(employees);
                db.SaveChanges();
            }
        }

        public static Employees Login(string username,string password)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
               return db.Employees.FirstOrDefault(p=>p.Password == password && p.LastName==username);
            }
        }
        //update
        public static void Update(Employees employees)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Entry(employees).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Employees employees)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Employees.Remove(employees);
                db.SaveChanges();
            }
        }
    }
}

