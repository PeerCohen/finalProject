using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CurrentEmployeeDTO
    {
        public int Id { get; set; }
        public Nullable<int> IdEmployee { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string DescriptionStatus { get; set; }
    }
}
