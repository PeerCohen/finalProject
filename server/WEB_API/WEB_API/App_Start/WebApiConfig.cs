using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WEB_API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
 
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings
        .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            GlobalConfiguration.Configuration.Formatters
                .Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);
            ((DefaultContractResolver)config.Formatters.JsonFormatter.SerializerSettings.ContractResolver).IgnoreSerializableAttribute = true;
            config.Formatters.JsonFormatter.SerializerSettings.
             ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi", //שם של השירות - ברירת מחדל
                routeTemplate: "api/{controller}/{id}", //הכתובת של השירות
                //controller - שם של הקונטרלור בתוך השירות
                //id - עבור הפונקציה פרמטר שמתקבל בשורת הכתובת
                defaults: new { id = RouteParameter.Optional }
            );
          
        }
    }
}
