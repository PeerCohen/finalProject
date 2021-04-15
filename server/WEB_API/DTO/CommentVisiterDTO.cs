using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class CommentVisiterDTO
    {
        
        public string Comment { get; set; }
        public int id { get; set; }
        public int? mark { get; set; }
        public DateTime? date { get; set; }
        public string Name { get; set; }

    }
}
