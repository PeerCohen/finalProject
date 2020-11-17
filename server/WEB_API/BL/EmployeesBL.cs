using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using BL.cast;
using System.Runtime.Remoting.Messaging;
using System.Data;

namespace BL
{
   public static class EmployeesBL
    {
        public static List<EmployeesDTO> GetAll()
        {
            return EmployeesCast.ListToDTO(EmployeesDAL.GetAll());
        }

        public static void Update(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Update(EmployeesCast.ToDAL(employeesTypes));
        }
        public static void Delete(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Delete(EmployeesCast.ToDAL(employeesTypes));
        }
        public static EmployeesDTO GetById(int id) 
        {
            return EmployeesCast.ToDTO(EmployeesDAL.GetById(id));
        }
        public static void Add(EmployeesDTO employeesTypes)
        {
            EmployeesDAL.Add(EmployeesCast.ToDAL(employeesTypes));
        }

        public static EmployeesDTO login(string username,string password)
        {
            return EmployeesCast.ToDTO(EmployeesDAL.Login(username, password));
        }
        // פונקצית כניסה עובד או לקוח אם הןא עובד נוסף עוד יום ביון העובד עם שעת הכניסה הנוכחי  
        public static object SineIn(string  name, string password)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                // עם המשתשמש מסוג עובד 
                Employees employees = db.Employees.FirstOrDefault
                    (e => e.FirstName.Equals(name) && e.Password.Equals(password));
                if (employees != null)
                {
                    UserCalandar userCalandar = db.UserCalandar.FirstOrDefault(u =>
                     u.IdUser == employees.Id && u.Date.Value.Year == DateTime.Today.Year &&
                     u.Date.Value.Month == DateTime.Today.Month && u.Date.Value.Day == DateTime.Today.Day);
                    // עם יש למשתמש יום ביומן בתאריך של היום רק לעדכן את שעת הכניסה 
                    if (userCalandar!= null)
                    {
                        userCalandar.EntranceTime = DateTime.Now;
                        db.Entry(userCalandar).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                    }
                    // אם אין לו יום ביומן בתאריך של היום מוסיך תאריך חדש 
                    else
                    {
                        UserCalandar userC = new UserCalandar();
                        userC.IdUser = employees.Id;
                        userC.Date = DateTime.Today;
                        userC.EntranceTime = DateTime.Now;
                        db.UserCalandar.Add(userC);
                        db.SaveChanges();
                    }
                    return EmployeesDTO.ConvertDonationToDTO(employees);
                }
                // אם המשתמש הוא מסוג לקוח 
                Visiters visiter = db.Visiters.FirstOrDefault(v => v.NameUser.Equals(name) && v.Password.Equals(password));
                if (visiter != null)
                {
                    return visiter;
                }
                // אם המשתמש לא רשום במערכתת 
                return null;
            }
        }
        // יציאה של עובד שומר במסד נתונים ת שעת היציאה של העובד 
        public static UserCalandarDTO SingOut(int id, DateTime date)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                UserCalandar userCalandar = db.UserCalandar.FirstOrDefault(u =>
                     u.IdUser == id && u.Date.Value.Year == date.Year &&
                     u.Date.Value.Month == date.Month && u.Date.Value.Day == date.Day);
                if (userCalandar != null)
                {
                    userCalandar.LeavingTime = date;
                    db.Entry(userCalandar).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return UserCalandarC.ToDTO(userCalandar);
                }
                else
                    return null;
            }
        }
    }
  
}
