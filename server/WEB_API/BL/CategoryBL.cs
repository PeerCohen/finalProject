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

        public static void Update(CategoryDTO category)
        {
            CategoryDAL.Update(CategoryCast.ToDAL(category));
        }
        public static void Delete(CategoryDTO category)
        {
            CategoryDAL.Delete(CategoryCast.ToDAL(category));
        }
        public static CategoryDTO GetById(int id)
        {
            return CategoryCast.ToDTO(CategoryDAL.GetById(id));
        }
        public static void Add(CategoryDTO category)
        {
            CategoryDAL.Add(CategoryCast.ToDAL(category));
        }
    }
}
