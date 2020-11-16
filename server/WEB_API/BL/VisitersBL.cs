using BL.cast;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class VisitersBL
    {
        public static List<VisitersDTO> GetAll()
        {
            return VisitersCast.ListToDTO(VisitersDAL.GetAll());
        }

        public static void Update(VisitersDTO visiters)
        {
            VisitersDAL.Update(VisitersCast.ToDAL(visiters));
        }
        public static void Delete(VisitersDTO visiters)
        {
            VisitersDAL.Delete(VisitersCast.ToDAL(visiters));
        }



        public static List<VisitersDTO> GetById(int id)
        {
            return VisitersCast.ListToDTO(VisitersDAL.GetById(id));
        }
        public static VisitersDTO Add(VisitersDTO visiters)
        {
            return VisitersCast.ToDTO(VisitersDAL.Add(VisitersCast.ToDAL(visiters)));
        }
        public static VisitersDTO Login(string username, string password)
        {
            return VisitersCast.ToDTO(
                VisitersDAL.GetByPassword(username, password));
        }

        public static VisitersDTO SignUp(string FirstName, string LastName, string Mail, string username, string password)
        {
            bool isVisiterSingUp = VisitersDAL.GetAll().Exists(p =>
                   p.Password == password
                  && p.NameUser == username
                  && p.FirstName == FirstName
                  && p.NameUser == username
                  && p.LastName == LastName
                  && p.Mail == Mail
                );
            if (isVisiterSingUp)
            {
                return null;
            }
            else
            {
                return Add(new VisitersDTO()
                {
                    FirstName = FirstName,
                    LastName = LastName,
                    Mail = Mail,
                    Password = password,
                    NameUser = username,
                });
            }

        }
        //מטרת הפונקציה להראות לכל לקוח את הסטוריית ההזמנות שלו
        public static bool AddDose(InventDoseDTO InventDose)
        {
            InventDoseBL.Add(InventDose);
            return true;
        }
    }
}
