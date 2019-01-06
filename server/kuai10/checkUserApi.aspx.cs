using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FrameWork.web
{
    public partial class checkUserApi : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string user = Request.QueryString["user"];
                string pass = Request.QueryString["pass"];
                //string mac = Request.QueryString["mac"];

                DataTable dt = DbHelperSQL.Query("select *  FROM Bas_User where UserName='" + user + "' and PassWord='" + pass + "'  ").Tables[0];//and MAC='" + mac + "'
                if (dt.Rows.Count > 0)
                {
                    DataTable dtCheckOnline = DbHelperSQL.Query("select *  FROM Bas_Online where O_UserName='" + user + "' and DATEDIFF(MINUTE,O_LastTime,GETDATE())<3  ").Tables[0];

                    if (dtCheckOnline.Rows.Count > 0)
                    {
                        Response.Write("online");
                    }
                    else
                    {
                        Response.Write("ok");
                    }
                }
                else
                {
                    Response.Write("no");
                }
            }
            catch
            {
                Response.Write("no");
            }
            finally
            {

                Response.End();
            }
        }
    }
}
