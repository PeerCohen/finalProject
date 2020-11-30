using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEB_API.Controllers
{
    [RoutePrefix("api/Menu")]
    public class MenuController : ApiController
    {
        // GET: api/Menu
        [HttpGet]
        [Route("GetAllMenuDetails")]
        public List<MenuDTO> GetAllMenuDetails()
        {
            return MenuBL.GetAll();
        }
        //קבלת רשימת תפריטים לפי שיוך קטגוריה
        [HttpGet]
        [Route("GetMenuByCategory/{id}")]
        public List<MenuDTO> GetByCategory(int id)
        {
            return MenuBL.GetByCategory(id);
        }
        // קבלת מנות ממומלצות לפי קטגוריה
        [HttpGet]
        [Route("GetMenuByRating/{id}")]
        public List<MenuDTO> GetBestRating(int id)
        {
            return MenuBL.GetByCategoryBestRating(id);
        }
        // GET: api/Menu/5
        [HttpGet]
        [Route("GetMenuById/{id}")]
        public MenuDTO GetById(int id)
        {
            return MenuBL.GetById(id);
        }

        // POST: api/Menu
        [HttpPost]
        [Route("UpdateDoseOfMenu")]
        public void UpdateDoseOfMenu([FromBody]MenuDTO menu)
        {
            MenuBL.Update(menu);
        }

        [HttpPost]
        [Route("AddDoseOfMenu")]
        public void AddDoseOfMenu([FromBody]MenuDTO menu)
        {
            MenuBL.Add(menu);
        }
        // PUT: api/Menu/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Menu/5
        [HttpPost]
        [Route("DeleteDoseOfMenu")]
        public void Delete([FromBody]MenuDTO menu)
        {
            MenuBL.Delete(menu);
        }
    }
}
