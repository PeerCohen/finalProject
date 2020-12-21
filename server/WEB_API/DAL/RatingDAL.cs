using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class RatingDAL
    {
        //get all
        public static List<Rating> GetAll()
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Rating.ToList();
            }
        }
        //get by id
        public static Rating GetById(int id)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                return db.Rating.Find(id);
            }

        }

        //add
        public static void Add(Rating Rating)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Rating.Add(Rating);
                db.SaveChanges();
            }
        }
        //update
        public static void Update(Rating Rating)
        {

            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Entry(Rating).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        //delete
        public static void Delete(Rating Rating)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                db.Rating.Remove(Rating);
                db.SaveChanges();
            }
        }

        public static int GetRate(int? doseId)
        {
            using (restaurantEntities1 db = new restaurantEntities1())
            {
                var d = db.Rating.Where(p => p.doseId == doseId).ToList();
                var sum = d.Sum(p => p.rate);
                var cou = d.Count;
                var dos = db.Menu.First(p => p.Id == doseId);
                dos.RateDose = sum / cou;
                db.SaveChanges();
                return (int)sum / cou;
            }
        }
    }
}

