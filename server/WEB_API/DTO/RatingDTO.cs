using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class RatingDTO
    {
        public int? userId { get; set; }
        public int? doseId { get; set; }
        public int? rate { get; set; }
    }
}
