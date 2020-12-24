using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
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
        public static EmployeesDTO ConvertDonationToDTO(Employees e)
        {
            var res = new EmployeesDTO
            {
                Id = e.Id,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Tz = e.Tz,
                Phone = e.Phone,
                address = e.address,
                IdEmployeeType = e.IdEmployeeType,
            };
            return res;
        }
        public static EmployeesDTO ConvertDonationToTabale(Employees e)
        {
            var res = new EmployeesDTO
            {
                Id = e.Id,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Tz = e.Tz,
                Phone = e.Phone,
                address = e.address,
                IdEmployeeType = e.IdEmployeeType,
            };
            return res;
        }
    }
}
