using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class InventDoseDTO
    {
        public Nullable<int> IdDose { get; set; }
        public Nullable<int> IdChef { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> IdTable { get; set; }
        public Nullable<System.TimeSpan> HourInvention { get; set; }
        public int Id { get; set; }
    }
}
