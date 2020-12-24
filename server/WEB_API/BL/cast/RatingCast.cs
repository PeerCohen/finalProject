using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.cast
{
    public static class RatingCast
    {
        public static RatingDTO ToDTO(Rating item)
        {
            return new RatingDTO()
            {
                doseId = item.doseId,
                userId = item.userId,
                rate = item.rate
            };
        }
        //list to dto
        public static List<RatingDTO> ListToDTO(List<Rating> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Rating ToDAL(RatingDTO item)
        {
            return new Rating()
            {
                doseId = item.doseId,
                userId = item.userId,
                rate=item.rate
            };
        }
        //list to dal
        public static List<Rating> ListToDAL(List<RatingDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}

