using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FrameWork.web
{
    public partial class OnLine : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string user = Request.QueryString["user"];
                string count = Request.QueryString["count"];
                if(count == "0")
                {
                    DataTable dt = DbHelperSQL.Query("select *  FROM Bas_Online where O_UserName='" + user + "'  ").Tables[0];
                    if(dt.Rows.Count > 0)
                    {
                        Response.Write("update");
                        DbHelperSQL.ExecuteSql("update Bas_Online set [O_LastTime]=getdate() where O_UserName='" + user + "'");
                    }
                    else
                    {
                        Response.Write("insert");
                        DbHelperSQL.ExecuteSql("INSERT INTO Bas_Online([O_UserName],[O_Ip],[O_LoginTime],[O_LastTime]) VALUES ('" + user + "','" + GetCurrentIpAddress() + "',getdate(),getdate()) ");
                    }
                }
                else
                {
                     DataTable dt = DbHelperSQL.Query("select *  FROM Bas_Online where O_UserName='" + user + "'  ").Tables[0];
                     if (dt.Rows.Count > 0)
                     {
                         DbHelperSQL.ExecuteSql("update Bas_Online set [O_LastTime]=getdate() where O_UserName='" + user + "'");
                     }
                     else
                     {
                         Response.Write("no");
                     }
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
        public  string GetCurrentIpAddress()
        {
            if (System.Web.HttpContext.Current.Request.ServerVariables["HTTP_VIA"] != null)
                return System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"].Split(new char[] { ',' })[0];
            else
                return System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]; 
 
        }
    }
}
