using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using BL.cast;

namespace BL
{
   public class CategoryBL
    {
      

        public static List<CategoryDTO> GetAll()
        {
            return CategoryCast.ListToDTO(CategoryDAL.GetAll());
        }

        public static void Update(CategoryDTO employeesTypes)
        {
            CategoryDAL.Update(CategoryCast.ToDAL(employeesTypes));
        }
        public static void Delete(CategoryDTO employeesTypes)
        {
            CategoryDAL.Delete(CategoryCast.ToDAL(employeesTypes));
        }
        public static CategoryDTO GetById(int id)
        {
            return CategoryCast.ToDTO(CategoryDAL.GetById(id));
        }
        public static void Add(CategoryDTO employeesTypes)
        {
            CategoryDAL.Add(CategoryCast.ToDAL(employeesTypes));
        }
    }
}
