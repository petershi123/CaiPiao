using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FrameWork.web.Manager
{
    public partial class OpenFullWin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public string getid()
        {
            return Request.QueryString["id"].ToString();
        }
        
    }
}
