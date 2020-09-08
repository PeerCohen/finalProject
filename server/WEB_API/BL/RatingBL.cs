using BL.cast;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
  public static class RatingBL
    {
        public static List<RatingDTO> GetAll()
        {
            return RatingCast.ListToDTO(RatingDAL.GetAll());
        }

        public static void Update(RatingDTO Rating)
        {
            RatingDAL.Update(RatingCast.ToDAL(Rating));
        }
        public static void Delete(RatingDTO Rating)
        {
            RatingDAL.Delete(RatingCast.ToDAL(Rating));
        }
        public static RatingDTO GetById(int id)
        {
            return RatingCast.ToDTO(RatingDAL.GetById(id));
        }
        public static void Add(RatingDTO Rating)
        {
            RatingDAL.Add(RatingCast.ToDAL(Rating));
        }
        public static int CalcRate(int doseId)
        {
          return  RatingDAL.GetRate(doseId);
        }
    }
}

