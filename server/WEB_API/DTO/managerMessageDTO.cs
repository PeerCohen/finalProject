using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class managerMessageDTO
    {
        public int Id { get; set; }
        public Nullable<int> IdEmployee { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string message { get; set; }
        public string subject { get; set; }
        public Nullable<int> fromEmloyeeId { get; set; }
        public string fromEmloyeeName { get; set; }
        public Nullable<bool> AlreadyRead { get; set; }
      
        public static managerMessage ConvertDonationToTabel(managerMessageDTO e)
        {
            var res = new managerMessage
            {
                Id = e.Id,
                IdEmployee = e.IdEmployee,
                Date = e.Date,
                message = e.message,
                subject = e.subject,
                fromEmloyeeId=e.fromEmloyeeId,
                fromEmloyeeName= e.fromEmloyeeName,
                AlreadyRead= e.AlreadyRead,
            };
            return res;
        }
        public static managerMessageDTO ConvertDonationToDTO(managerMessage e)

        {
            var res = new managerMessageDTO
            {
                Id = e.Id,
                IdEmployee = e.IdEmployee,
                Date = e.Date,
                message = e.message,
                subject = e.subject,
                fromEmloyeeId = e.fromEmloyeeId,
                fromEmloyeeName = e.fromEmloyeeName,
                AlreadyRead = e.AlreadyRead,
            };
            return res;
        }
    //list to dto
    public static List<managerMessageDTO> ListToDTO(List<managerMessage> list)
        {
            return list.Select(x => ConvertDonationToDTO(x)).ToList();
        }
    }
}
