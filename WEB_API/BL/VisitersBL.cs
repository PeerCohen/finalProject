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
   public static class VisitersBL
    {
        public static List<VisitersDTO> GetAll()
        {
            return VisitersCast.ListToDTO(VisitersDAL.GetAll());
        }

        public static void Update(VisitersDTO employeesTypes)
        {
            VisitersDAL.Update(VisitersCast.ToDAL(employeesTypes));
        }
        public static void Delete(VisitersDTO employeesTypes)
        {
            VisitersDAL.Delete(VisitersCast.ToDAL(employeesTypes));
        }
        public static VisitersDTO GetById(int id)
        {
            return VisitersCast.ToDTO(VisitersDAL.GetById(id));
        }
        public static void Add(VisitersDTO employeesTypes)
        {
            VisitersDAL.Add(VisitersCast.ToDAL(employeesTypes));
        }
    }
}
