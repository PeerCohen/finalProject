using BL.cast;
using DAL;
using DTO;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WEB_API.Models;

namespace BL
{
    public static class InventDoseBL
    {
        public static List<InventDoseDTO> GetAll()
        {
            var dal = InventDoseDAL.GetAll();
            List<InventDoseDTO> dalList = new List<InventDoseDTO>();
            foreach (var item in dal)
            {
                var i = InventDoseCast.ToDTO(item);
                i.StatusName = InventDoseDAL.GetByIdStatusInvent(i.IdStatusInvent).Kind.Trim();
                i.VisiterName = VisitersDAL.GetById(i.IdVisiter).FirstName;                
                i.InventDetails = InventDetailsCast.ListToDTO(InventDoseDAL.GetByIdInventDetails(i.Id));
                foreach (var menu in i.InventDetails)
                {
                    
                    var m = MenuBL.GetById(menu.IdMenu);
                    menu.MenuName = m.NameDose;   
                }
                dalList.Add(i);
            }
            return dalList;

        }

        public static List<InventDoseDTO> GetAllById(int id)
        {
            var listDose = GetAll();
           return listDose.Where(item => item.IdStatusDose == id).ToList();
            List<InventDoseDTO> List = new List<InventDoseDTO>();
            foreach (var item in listDose)
            {
                if (item.IdStatusDose == id)
                    List.Add(item);
            }
            return List;
        }
        public static List<SpecialInventDTO> GetAllSpecialInvent()
        {
            return InventDoseCast.ListToDTOSpecial(InventDoseDAL.GetAllSpecialInvent());
        }

        public static void UpdateStatus(InventDoseDTO InventDose)
        {
            InventDoseDAL.UpdateIdStatus(InventDoseCast.ToDAL(InventDose));
        }
        public static void Addfeedback(InventDoseDTO InventDose)
        {
            InventDoseDAL.Addfeedback(InventDoseCast.ToDAL(InventDose));
        }
        public static void Update(InventDoseDTO InventDose)
        {
            InventDoseDAL.Update(InventDoseCast.ToDAL(InventDose));
        }
        public static List<FavoriteDose> getDoseByfeedback()
        {
            List<FavoriteDose> favorite=new List<FavoriteDose>();            
            var list = InventDoseCast.ListToDTO(InventDoseDAL.GetDoseByfeedback());
            foreach (var item in list)
            {
                var f = new FavoriteDose();
                var name = VisitersDAL.GetById(item.IdVisiter);
                f.VisiterName=name.FirstName.Trim() +" "+ name.LastName.Trim();
                f.Feedback = item.Feedback.Trim();
                f.date = DateTime.Now;
                f.rate = item.rate;
                item.InventDetails = InventDetailsCast.ListToDTO(InventDoseDAL.GetByIdInventDetails(item.Id));
                foreach (var menu in item.InventDetails)
                {
                   f.Menu =MenuBL.GetById(menu.IdMenu);
                }
                favorite.Add(f);
            }
            return favorite;
        }
        public static List<InventDoseDTO> GetCurrentInvents()
        {
            StatusDoseDTO status = StatusDoseBL.GetByDescription("הוזמן");
            List<InventDose> invents = InventDoseDAL.GetAll().
                Where(invent => invent.IdStatusDose == status.IdDose).ToList();
            return InventDoseCast.ListToDTO(invents);
        }

        public static void Delete(InventDoseDTO InventDose)
        {
            InventDoseDAL.Delete(InventDoseCast.ToDAL(InventDose));
        }
        public static void DeleteSpecialInvent(SpecialInventDTO specialInvent)
        {
            InventDoseDAL.DeleteSpecialInvent(InventDoseCast.ToDALSpecialInvent(specialInvent));
        }
        public static void updateSpecialInvent(SpecialInventDTO specialInvent)
        {
            InventDoseDAL.UpdateSpecialInvent(InventDoseCast.ToDALSpecialInvent(specialInvent));
        }
        public static List<InventDoseDTO> GetById(int id)
        {
            var list= InventDoseDAL.GetById(id);
            List<InventDoseDTO> dalList = new List<InventDoseDTO>();
            foreach (var item in list)
            {
                var i = InventDoseCast.ToDTO(item);
                i.StatusName = StatusDoseBL.GetByIdStatusInventDose(i.IdStatusInvent).Trim();
                i.InventDetails = InventDetailsCast.ListToDTO(InventDoseDAL.GetByIdInventDetails(i.Id));
                foreach (var menu in i.InventDetails)
                {
                    var m = MenuDAL.GetById(menu.IdMenu);
                    menu.MenuName = m.NameDose;
                }
                dalList.Add(i);
            }
            return dalList;
        }
        public static void Add(InventDoseDTO InventDose)
        {
            InventDoseDAL.Add(InventDoseCast.ToDAL(InventDose));
        }
        public static void AddSpecialInvent(SpecialInventDTO specialInvent)
        {
            InventDoseDAL.AddSpecialInvent(InventDoseCast.ToDALSpecialInvent(specialInvent));
        }
    }
}
