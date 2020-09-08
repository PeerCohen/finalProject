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
        public Nullable<int> Price { get; set; }
        public string NameDose { get; set; }
        public string RateDose { get; set; }
    }
}
