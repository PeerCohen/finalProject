using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/InventDose")]
    public class InventDoseController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        // GET: api/InventDose

        public List<InventDoseDTO> GetCurrentInvents()
        {
            return InventDoseBL.GetCurrentInvents();
        }
        
        [HttpGet]
        [Route("GetInvent/{id}")]
        public List<InventDoseDTO> Get(int id)
        {
            var l= InventDoseBL.GetById(id);
            return l;
        }
        [HttpGet]
        [Route("GetAllInventDose")]
        public List<InventDoseDTO> GetAllInventDose()
        {
            return InventDoseBL.GetAll();
        }
        [HttpGet]
        [Route("GetAllPrepaerInventDose/{id}")]
        public List<InventDoseDTO> GetAllPrepaerInventDose(int id)
        {
            return InventDoseBL.GetAllById(id);
        }
        [HttpGet]
        [Route("GetAllWaitingInventDose")]
        public List<InventDoseDTO> GetAllWaitingInventDose()
        {
            return InventDoseBL.GetAllById(3);
            var list= InventDoseBL.GetAll();
            List<InventDoseDTO> List = new List<InventDoseDTO>();
            foreach (var item in list)
            {
                if (item.IdStatusDose == 3)
                    List.Add(item);
            }
            return List;
           // var list =InventDoseBL.GetAllById(3);
            //return list;
        }

        // POST: api/InventDose
        [HttpPost]
        [Route("updateStatusDose")]
        public void Post([FromBody]InventDoseDTO inventDose)
        {
            InventDoseBL.UpdateStatus(inventDose);
        }
        [HttpGet]
        [Route("favoriteDose")]
        public List<FavoriteDose> getfeedbackDose()
        {
             return InventDoseBL.getDoseByfeedback();
        }
        [HttpPost]
        [Route("addfeedback")]
        public void Addfeedback([FromBody]InventDoseDTO inventDose)
        {
            InventDoseBL.Addfeedback(inventDose);
        }
        // PUT: api/InventDose/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/InventDose/5
        public void Delete(int id)
        {
        }
    }
}
