using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WEB_API.Models
{
    public class FavoriteDose
    {
        public  MenuDTO Menu { get; set; }
        public string VisiterName { get; set; }
        public string Feedback { get; set; }
        public int? rate { get; set; }
        public System.DateTime date { get; set; }

    }
}