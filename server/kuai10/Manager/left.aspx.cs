using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

using FrameWork;
using FrameWork.Components;

namespace FrameWork.web
{
    public partial class left : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            BindMenu();
        }

        #region "绑定主菜单"
        /// <summary>
        /// 绑定主菜单
        /// </summary>
        private void BindMenu()
        {            
            LeftMenu.DataSource = BusinessFacade.sys_Module_List();
            LeftMenu.DataBind();
        }


        #endregion

        #region "绑定子菜单"
        /// <summary>
        /// 绑定子菜单事件
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void LeftMenu_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            
            sys_ModuleTable s_Mt= (sys_ModuleTable)e.Item.DataItem;

            QueryParam qp = new QueryParam();
            qp.Orderfld = " M_OrderLevel ";
            qp.OrderType = 0;
            qp.Where =  string.Format("Where M_Close=0 and M_ParentID ={0}",s_Mt.ModuleID);
            if (FrameWork.UserData.GetUserDate.UserID == 1)
                qp.Where += " and ModuleID !=79 ";
            int RecordCount = 0;
            ArrayList lst = BusinessFacade.sys_ModuleList(qp, out RecordCount);
            BusinessFacade.Remove_MenuNoPermission(lst);
            if (lst.Count > 0)
            {
                Repeater LeftSubID = (Repeater)e.Item.FindControl("LeftMenu_Sub");
                LeftSubID.DataSource = lst;
                LeftSubID.DataBind();
            }
            else {
                e.Item.Visible = false;
            }

        }


        #endregion
    }
}
