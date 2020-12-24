using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class StatusDoseCast
    {
        //one to dto
        public static StatusDoseDTO ToDTO(StatusDose item)
        {
            return new StatusDoseDTO()
            {
                DescriptionStatusDose=item.Description,
                IdDose=item.Id
            };
        }

        //list to dto
        public static List<StatusDoseDTO> ListToDTO(List<StatusDose> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static StatusDose ToDAL(StatusDoseDTO item)
        {
            return new StatusDose()
            {
                Description = item.DescriptionStatusDose,
                Id = item.IdDose
            };
        }
        //list to dal
        public static List<StatusDose> ListToDAL(List<StatusDoseDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}
