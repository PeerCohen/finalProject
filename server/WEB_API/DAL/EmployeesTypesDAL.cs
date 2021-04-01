using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class EmployeesTypesDAL
    {
        //get all
        public static List<EmployeesTypes> GetAll()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
            return db.EmployeesTypes.ToList();
            }
        }
        //get by id
        public static EmployeesTypes GetById(int id)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                return db.EmployeesTypes.Find(id);
            }
             

        }
        //add
        public static void Add(EmployeesTypes employeesTypes)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.EmployeesTypes.Add(employeesTypes);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(EmployeesTypes employeesTypes)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                db.Entry(employeesTypes).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(EmployeesTypes employeesTypes)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                db.EmployeesTypes.Remove(employeesTypes);
                db.SaveChanges();
            }
        }
    }
}
