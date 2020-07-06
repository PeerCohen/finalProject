using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class TablesDTO
    {
        public Nullable<int> IdTable { get; set; }
        public Nullable<int> IdServing { get; set; }
        public string Status { get; set; }
        public string PlaceTable { get; set; }
        public Nullable<int> CountPeople { get; set; }
        public int Id { get; set; }
    }
}
