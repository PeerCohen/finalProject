using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class UserCalandarDTO
    {
        public int idUserCalandar { get; set; }
        public Nullable<int> IdUser { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> EntranceTime { get; set; }
        public Nullable<System.DateTime> LeavingTime { get; set; }
        public Nullable<int> NumWorkingHours { get; set; }
        public string Shift { get; set; }
    }
}
