using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Net.Mail;

namespace BL
{
    public class EmailBLL
    {

            public static void sendEmail(Email email)
            {
                try
                {
                    MailMessage mail = new MailMessage();
                    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                    mail.From = new MailAddress("2meatrestaurant@gmail.com");
                    mail.To.Add(email.email);
                    mail.Subject =email.Subject;
                    mail.IsBodyHtml = true;
                    mail.Body = "<br />" + "<b>" + email.Body + "</b>"
                    + "<img src=@'C:\\Users\\user-pc\\Documents\\GitHub\\finalPoject\\server\\WEB_API\\BL\\title.png'/>";
                   
                    SmtpServer.Port = 587;
                    SmtpServer.Credentials = new System.Net.NetworkCredential("2meatrestaurant@gmail.com", "prcn8531");
                    SmtpServer.EnableSsl = true;
                
                SmtpServer.Send(mail);
                }
                catch (Exception ex)
                {
                throw (ex);
                }
            }
        }
    }
public class Email
{
    public string email { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }

}
