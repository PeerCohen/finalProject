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
   public static class VipTablesBL
    {
        public static List<VipTablesDTO> GetAll()
        {
            return VipTablesCast.ListToDTO(VipTablesDAL.GetAll());
        }

        public static void Update(VipTablesDTO employeesTypes)
        {
            VipTablesDAL.Update(VipTablesCast.ToDAL(employeesTypes));
        }
        public static void Delete(VipTablesDTO employeesTypes)
        {
            VipTablesDAL.Delete(VipTablesCast.ToDAL(employeesTypes));
        }
        public static VipTablesDTO GetById(int id)
        {
            return VipTablesCast.ToDTO(VipTablesDAL.GetById(id));
        }
        public static void Add(VipTablesDTO employeesTypes)
        {
            VipTablesDAL.Add(VipTablesCast.ToDAL(employeesTypes));
        }
    }
}
