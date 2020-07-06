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
   public static class TablesBL
    {
        public static List<TablesDTO> GetAll()
        {
            return TablesCast.ListToDTO(TablesDAL.GetAll());
        }

        public static void Update(TablesDTO employeesTypes)
        {
            TablesDAL.Update(TablesCast.ToDAL(employeesTypes));
        }
        public static void Delete(TablesDTO employeesTypes)
        {
            TablesDAL.Delete(TablesCast.ToDAL(employeesTypes));
        }
        public static TablesDTO GetById(int id)
        {
            return TablesCast.ToDTO(TablesDAL.GetById(id));
        }
        public static void Add(TablesDTO employeesTypes)
        {
            TablesDAL.Add(TablesCast.ToDAL(employeesTypes));
        }
    }
}
