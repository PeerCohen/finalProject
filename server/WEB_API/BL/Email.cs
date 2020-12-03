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
                    mail.Body = String.Format(
            "<h3>: " +email .Body+ "</h3>" +
            @"<img src=""../../../ ""cid:3698327.jpg"" />"); ;
                    SmtpServer.Port = 587;
                    SmtpServer.Credentials = new System.Net.NetworkCredential("2meatrestaurant@gmail.com", "prcn8531");
                    SmtpServer.EnableSsl = true;

                    SmtpServer.Send(mail);
                    //MessageBox.Show("mail Send");
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
