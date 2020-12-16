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
using System.Runtime.CompilerServices;

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

        public static EmployeesDTO login(string username, string password)
        {
            return EmployeesCast.ToDTO(EmployeesDAL.Login(username, password));
        }
        public static object getDailyWorker()
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>u.Date == DateTime.Today);
               
                return UserCalandarC.ToDTO(userCalandar);
            }
        }
        // פונקצית כניסה עובד או לקוח אם הןא עובד נוסף עוד יום ביון העובד עם שעת הכניסה הנוכחי  
        public static object SineIn(string name, string password)
        {

            using (restaurantEntities db = new restaurantEntities())
            {
                // עם המשתשמש מסוג עובד 
                Employees employees = db.Employees.FirstOrDefault
                    (e => e.FirstName.Equals(name) && e.Password.Equals(password));
                if (employees != null)
                {
                    UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>
                     u.IdUser == employees.Id && u.Date.Value.Year == DateTime.Today.Year &&
                     u.Date.Value.Month == DateTime.Today.Month && u.Date.Value.Day == DateTime.Today.Day);
                    // עם יש למשתמש יום ביומן בתאריך של היום רק לעדכן את שעת הכניסה 
                    if (userCalandar != null)
                    {
                        userCalandar.EntranceTime = DateTime.Now;
                        db.Entry(userCalandar).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                    }
                    // אם אין לו יום ביומן בתאריך של היום מוסיך תאריך חדש 
                    else
                    {
                        UserCalander userC = new UserCalander();
                        userC.IdUser = employees.Id;
                        userC.Date = DateTime.Today;
                        userC.EntranceTime = DateTime.Now;
                        db.UserCalander.Add(userC);
                        db.SaveChanges();
                    }
                    return EmployeesDTO.ConvertDonationToDTO(employees);
                }
                // אם המשתמש הוא מסוג לקוח 
                Visiters visiter = db.Visiters.FirstOrDefault(v => v.NameUser.Equals(name) && v.Password.Equals(password));
                if (visiter != null)
                {

                    return VisitersCast.ToDTO(visiter);
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
                Employees emm = db.Employees.FirstOrDefault(e => e.Id == id);
                if (emm != null)
                {
                    UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>
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
                return null;

            }
        }
        // שמירת המשמרות של עובד לתאריך מסוים 
        public static string AddShifttoNextWeekEmployee(List<calandar> calandarList, int userID)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                foreach (var item in calandarList)
                {
                    UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>
                                  u.IdUser == userID && u.Date.Value.Year == item.date.Year &&
                                  u.Date.Value.Month == item.date.Month && u.Date.Value.Day == item.date.Day);
                    if (userCalandar != null)
                    {
                        userCalandar.Shift = item.shift;
                        db.Entry(userCalandar).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                    }
                    else
                    {
                        UserCalander userC = new UserCalander();
                        userC.IdUser = userID;
                        userC.Date = item.date;
                        userC.Shift = item.shift;
                        db.UserCalander.Add(userC);
                        db.SaveChanges();
                    }

                }
                return "השינויים נשמרו";
            }
        }
        // שליפת כל היומ שהם לא מנהלים 
        public static List<CalandarToManager> GetEmloyeesCalandarToManger(DateTime startOfWeek)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                DateTime endOfWeek = startOfWeek.AddDays(6);
                List<UserCalander> lc = db.UserCalander.Where(c => c.Date >= startOfWeek && c.Date <= endOfWeek).ToList();
                List<CalandarToManager> LCTM = new List<CalandarToManager>();
                foreach (var item in lc)
                {
                    Employees em = db.Employees.FirstOrDefault(c => c.Id == item.IdUser);
                    CalandarToManager calandarToManager = new CalandarToManager();
                    if (em.IdEmployeeType != 1)
                    {
                        if (LCTM.Find(t => t.date == item.Date && t.shift == item.Shift) != null)
                        {
                            int i = LCTM.FindIndex(t => t.date == item.Date);
                            LCTM[i].employeeName.Add(em.FirstName);
                            LCTM[i].employeeID.Add(em.Id);
                        }
                        else
                        {
                            calandarToManager.date = item.Date.Value;
                            calandarToManager.employeeID.Add(em.Id);
                            calandarToManager.employeeName.Add(em.FirstName);
                            calandarToManager.shift = item.Shift;
                            LCTM.Add(calandarToManager);
                        }

                    }
                }
                IEnumerable<DateTime> lD = DateRange(startOfWeek.AddDays(1), endOfWeek);
                foreach (var date in lD)
                {
                    CalandarToManager calandarToManager = new CalandarToManager();
                    if (LCTM.Find(t => t.date.Year == date.Year &&
                    t.date.Month == date.Month && t.date.Day == date.Day && t.shift == "evening") == null)
                    {
                        calandarToManager.date = date;
                        calandarToManager.employeeID.Add(0);
                        calandarToManager.employeeName.Add("");
                        calandarToManager.shift = "evening";
                        LCTM.Add(calandarToManager);
                    }
                    if (LCTM.Find(t => t.date.Year == date.Year &&
                    t.date.Month == date.Month && t.date.Day == date.Day && t.shift == "morning") == null)
                    {
                        calandarToManager.date = date;
                        calandarToManager.employeeID.Add(0);
                        calandarToManager.employeeName.Add("");
                        calandarToManager.shift = "morning";
                        LCTM.Add(calandarToManager);
                    }
                }
                // מעבר על המערך של ימות השבוע ובדיקה אם אין ערך ריק ליום מסוים אם יש ערך ריק להוסיף אוביקט ללא שם 
                return LCTM.OrderBy(r => r.date).ToList();
            }
        }
        // פומקציה שמחזירה הפרש בין 2 תאריכים
        public static IEnumerable<DateTime> DateRange(DateTime fromDate, DateTime toDate)
        {
            return Enumerable.Range(0, toDate.Subtract(fromDate).Days + 1)
                             .Select(d => fromDate.AddDays(d));
        }
        //שינוי משמרות לפי תאריך לעובד מסוים ע"י מנהל 
        public static string PutShiftToEmployee(DateTime date, int IdUser)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>
                            u.IdUser == IdUser && u.Date.Value.Year == date.Year &&
                            u.Date.Value.Month == date.Month && u.Date.Value.Day == date.Day);
                if (userCalandar != null)
                {
                    if (userCalandar.Shift == "morning")
                        userCalandar.Shift = "evening";
                    else
                        userCalandar.Shift = "morning";
                    db.Entry(userCalandar).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
                return "עודכן משמרת  ";
            }
        }
        // קבלת דוח עובד 
     public static List<CalandarToManager>   GetEmloyeesCalandarByManaer(DateTime startOfWeek ,int idE)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                DateTime endOfWeek = startOfWeek.AddDays(6);
                List<UserCalander> lc = db.UserCalander.Where(c => c.Date >= startOfWeek && c.Date <= endOfWeek && c.IdUser == idE).ToList();
                List<CalandarToManager> LCTM = new List<CalandarToManager>();
                foreach (var item in lc)
                {
                    Employees em = db.Employees.FirstOrDefault(c => c.Id == item.IdUser);
                    CalandarToManager calandarToManager = new CalandarToManager();
                    if (em.IdEmployeeType != 1)
                    {
                        if (LCTM.Find(t => t.date == item.Date && t.shift == item.Shift) != null)
                        {
                            int i = LCTM.FindIndex(t => t.date == item.Date);
                            LCTM[i].employeeName.Add(em.FirstName);
                            LCTM[i].employeeID.Add(em.Id);
                        }
                        else
                        {
                            calandarToManager.date = item.Date.Value;
                            calandarToManager.employeeID.Add(em.Id);
                            calandarToManager.employeeName.Add(em.FirstName);
                            calandarToManager.shift = item.Shift;
                            LCTM.Add(calandarToManager);
                        }

                    }
                }
                IEnumerable<DateTime> lD = DateRange(startOfWeek.AddDays(1), endOfWeek);
                foreach (var date in lD)
                {
                    CalandarToManager calandarToManager = new CalandarToManager();
                    if (LCTM.Find(t => t.date.Year == date.Year &&
                    t.date.Month == date.Month && t.date.Day == date.Day && t.shift == "evening") == null)
                    {
                        calandarToManager.date = date;
                        calandarToManager.employeeID.Add(0);
                        calandarToManager.employeeName.Add("");
                        calandarToManager.shift = "evening";
                        LCTM.Add(calandarToManager);
                    }
                    if (LCTM.Find(t => t.date.Year == date.Year &&
                    t.date.Month == date.Month && t.date.Day == date.Day && t.shift == "morning") == null)
                    {
                        calandarToManager.date = date;
                        calandarToManager.employeeID.Add(0);
                        calandarToManager.employeeName.Add("");
                        calandarToManager.shift = "morning";
                        LCTM.Add(calandarToManager);
                    }
                }
                // כאן אני יעבור ל המעך של ימי השבוע ויבדוק אם אין ערך רעק ליום מסוים אם שי ערך ריק להוסים לי אוביקט ללא שם 
                return LCTM.OrderBy(r => r.date).ToList();
            }
        }
        // מחיקת עובד ממשרת מסוימת ע" מנהל
        public static string DeleteEmployeeShirt(DateTime date, int IdUser)
        {
            using (restaurantEntities db = new restaurantEntities())
            {
                UserCalander userCalandar = db.UserCalander.FirstOrDefault(u =>
                            u.IdUser == IdUser && u.Date.Value.Year == date.Year &&
                            u.Date.Value.Month == date.Month && u.Date.Value.Day == date.Day);
                if (userCalandar != null)
                {
                    db.UserCalander.Remove(userCalandar);
                    db.SaveChanges();
                }
                return "משמרת העובד הוסרה מהמערכת!! ";
            }
        }
    }
}
public class calandar
{
    public DateTime date { get; set; }
    public string shift { get; set; }
}
public class CalandarToManager
{
    public DateTime date { get; set; }
    public string shift { get; set; }
    public List<int> employeeID { get; set; } = new List<int>();
    public List<string> employeeName { get; set; } = new List<string>();
}