using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FrameWork.web
{
    public partial class OffLine : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string user = Request.QueryString["user"];
            DbHelperSQL.ExecuteSql("delete from Bas_Online where O_UserName='" + user + "'");
            Response.Write("ok");
            Response.End();
           
        }
    }
}
