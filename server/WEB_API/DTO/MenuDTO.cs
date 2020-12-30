using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class MenuDTO
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string NameDose { get; set; }
        public double? RateDose { get; set; }
        public int Category { get; set; }
        public string Description { get; set; }
        public string image { get; set; }
        public string ImageBase64 { get; set; }

    }
}
