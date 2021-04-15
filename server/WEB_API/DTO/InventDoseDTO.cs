using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class InventDoseDTO
    {
        public int Id { get; set; }
        public System.DateTime DateInvent { get; set; }
        public Nullable<int> IdEmployee { get; set; }
        public Nullable<int> IdStatusDose { get; set; }
        public Nullable<int> IdTable { get; set; }
        public System.TimeSpan HourInvention { get; set; }
        public int IdVisiter { get; set; }
        public int IdStatusInvent { get; set; }
        public string StatusName { get; set; }
        public string VisiterName { get; set; }
        public string Feedback { get; set; }
        public int? rate { get; set; }
        public List<InventDetailsDTO> InventDetailslist { get; set; }

        public ICollection<InventDetailsDTO> InventDetails { get; set; }
    }
}
