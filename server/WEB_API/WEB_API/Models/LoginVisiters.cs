using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WEB_API.Models
{
    public class LoginVisiters
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime LastdateEnter { get; set; }
    }
}