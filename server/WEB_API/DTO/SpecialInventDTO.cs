using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SpecialInventDTO
    {
        public int Id { get; set; }
        public string kindOfevent { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public string mail { get; set; }
        public DateTime? dateEvent { get; set; }
        public int? CountOfPeople { get; set; }
    }
}
