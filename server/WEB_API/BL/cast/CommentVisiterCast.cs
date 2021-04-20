using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.cast
{
   public class CommentVisiterCast
    {
        public static CommentVisiterDTO ToDTO(CommentVisiter item)
        {
            return new CommentVisiterDTO()
            {
                id = item.id,
                date = item.date,
                mark = item.mark,
                Comment = item.Comment,
                Name=item.Name

            };
        }
        ////list to dto
        public static List<CommentVisiterDTO> ListToDTO(List<CommentVisiter> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        ////one to dal
        public static CommentVisiter ToDAL(CommentVisiterDTO item)
        {
            return new CommentVisiter()
            {
                id = item.id,
                date = DateTime.Today,
                mark=item.mark,
                Comment = item.Comment,
                Name=item.Name
            };
        }
        //list to dal
        public static List<CommentVisiter> ListToDAL(List<CommentVisiterDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
