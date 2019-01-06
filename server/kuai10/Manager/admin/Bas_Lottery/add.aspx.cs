using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FrameWork.web.Manager.admin.Bas_Lottery
{
    public partial class add : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery  order by id desc ").Tables[0];
            if (dt.Rows.Count > 0)
            {
                Response.Redirect("Manager.aspx?IDX=" + Convert.ToInt32(dt.Rows[0]["ID"]).ToString() + "&CMD=Edit");


            }
        }
    }
}
