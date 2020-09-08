using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class EmployeesDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Tz { get; set; }
        public string Phone { get; set; }
        public string address { get; set; }
        public Nullable<int> IdEmployeeType { get; set; }
    }
}
