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
        public int? IdEmployee { get; set; }
        public int? Status { get; set; }
        public string StatusName { get; set; }
        public string VisiterName { get; set; }
        public int? IdTable { get; set; }
        public int IdVisiter { get; set; }
        public DateTime DateInvent { get; set; }

        public ICollection<InventDetailsDTO> InventDetails { get; set; }
    }
}
