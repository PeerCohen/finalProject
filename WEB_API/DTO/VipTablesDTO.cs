using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class VipTablesDTO
    {
        public int Id { get; set; }
        public Nullable<int> IdTable { get; set; }
        public Nullable<int> IdVisiter { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.TimeSpan> DateTimeStart { get; set; }
        public Nullable<int> IdServing { get; set; }
        public string CountPeople { get; set; }
    }
}
