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
        public int IdVisiter { get; set; }
        public string KindRequest { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> CountOfPeople { get; set; }
    }
}
