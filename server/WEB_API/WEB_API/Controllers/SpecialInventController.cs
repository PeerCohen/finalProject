﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;


namespace WEB_API.Controllers
{
    [RoutePrefix("api/SpecialInvent")]
    public class SpecialInventController : ApiController
    {
        [HttpGet]
        [Route("GetAllSpecialInvent")]
        public List<SpecialInventDTO> GetAllSpecialInvent()
        {
            return InventDoseBL.GetAllSpecialInvent(); 
        }

        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("AddSpecialInvent")]
        public void Add([FromBody]SpecialInventDTO specialInvent)
        {
             InventDoseBL.AddSpecialInvent(specialInvent);
        }
    }
}
