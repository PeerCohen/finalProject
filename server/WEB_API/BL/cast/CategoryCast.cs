using DTO;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class CategoryCast
    {
        public static CategoryDTO ToDTO(Category item)
        {
            return new CategoryDTO()
            {
                Id = item.Id,
                nameCategory = item.nameCategory,
                
            };
        }
        //list to dto
        public static List<CategoryDTO> ListToDTO(List<Category> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Category ToDAL(CategoryDTO item)
        {
            return new Category()
            {
                Id = item.Id,
                nameCategory = item.nameCategory,
            };
        }
        //list to dal
        public static List<Category> ListToDAL(List<CategoryDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
