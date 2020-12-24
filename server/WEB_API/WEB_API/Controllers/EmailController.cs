using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using BL;
namespace WEB_API.Controllers
{
    [RoutePrefix("api/Email")]
    public class EmailController : ApiController
    {
        [Route("send")]
        [HttpPost]
        public void POSTsengEmail([FromBody]Email email)
        {
            EmailBLL.sendEmail(email);
        }
    }
}
