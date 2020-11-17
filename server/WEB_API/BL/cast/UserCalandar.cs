using System;
using System.Collections.Generic;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 

namespace BL.cast
{
    class UserCalandarC
    {
        //one to dto
        public static UserCalandarDTO ToDTO(UserCalandar item)
        {
            return new UserCalandarDTO()
            {
                idUserCalandar = item.idUserCalandar,
                IdUser = item.IdUser,
                Date = item.Date,
                EntranceTime = item.EntranceTime,
                LeavingTime = item.LeavingTime,
                NumWorkingHours = item.NumWorkingHours,
                Shift = item.Shift,
            };
        }

        //list to dto
        public static List<UserCalandarDTO> ListToDTO(List<UserCalandar> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static UserCalandar ToDAL(UserCalandarDTO item)
        {
            return new UserCalandar()
            {
                idUserCalandar = item.idUserCalandar,
                IdUser = item.IdUser,
                Date = item.Date,
                EntranceTime = item.EntranceTime,
                LeavingTime = item.LeavingTime,
                NumWorkingHours = item.NumWorkingHours,
                Shift = item.Shift,
            };
        }
        //list to dal
        public static List<UserCalandar> ListToDAL(List<UserCalandarDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
