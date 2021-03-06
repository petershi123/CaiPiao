using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Collections.Generic;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;

using FrameWork;
using FrameWork.Components;

namespace FrameWork.web.Module.FrameWork.UserManager
{
    public partial class Default1 : System.Web.UI.Page
    {

        public string U_GroupID_ID ="";
        public string U_GroupID_Txt_ID = "";
        
        protected void Page_Load(object sender, EventArgs e)
        {
            
                if (UserData.GetUserDate.UserID!=1)
                    Response.Redirect("/Manager/admin/REL_BORROW/Manager.aspx?bh=" + UserData.GetUserDate .U_LoginName+ "&CMD=New");
            
            if (!Page.IsPostBack)
            {
                BindData();
            }
        }

        private void BindData()
        {
            QueryParam qp = new QueryParam();
            qp.Where = SearchTerms;
            qp.PageIndex = AspNetPager1.CurrentPageIndex;
            qp.PageSize = AspNetPager1.PageSize;
            qp.Orderfld = Orderfld;
            qp.OrderType = OrderType;
            int RecordCount = 0;
            ArrayList lst = BusinessFacade.sys_UserList(qp, out RecordCount);
            GridView1.DataSource = lst;
            GridView1.DataBind();
            this.AspNetPager1.RecordCount = RecordCount;
        }
        protected void AspNetPager1_PageChanged(object sender, EventArgs e)
        {
            BindData();
        }

        #region "绑定数据"
        /// <summary>
        /// 部门资料
        /// </summary>
        /// <param name="U_GroupID"></param>
        /// <returns></returns>
        public string Get_U_GroupID(int U_GroupID)
        {
            return BusinessFacade.sys_GroupDisp(U_GroupID).G_CName;
        }

        /// <summary>
        /// 用户类型
        /// </summary>
        /// <param name="U_Type"></param>
        /// <returns></returns>
        public string Get_U_Type(int U_Type)
        {
            if (U_Type == 0)
            {
                return "超级用户";
            }
            else
                return "普通用户";
        }

        /// <summary>
        /// 获取用户状态
        /// </summary>
        /// <param name="U_Status"></param>
        /// <returns></returns>
        public string GetStat(int U_Status)
        {
            if (U_Status == 0)
            {
                return "有效";
            }
            else {
                return "无效";
            }
        }
        #endregion

        protected void Button1_Click(object sender, EventArgs e)
        {
            string U_LoginName_Value = (string)Common.sink(U_LoginName.UniqueID, MethodType.Post, 20, 0, DataType.Str);
           // string U_UserNO_Value = (string)Common.sink(U_UserNO.UniqueID, MethodType.Post, 20, 0, DataType.Str);

            string SqlSearch = " Where U_Status<>2 ";

            if (U_LoginName_Value != "")
            {
                SqlSearch = SqlSearch + " and U_LoginName like '%"+Common.inSQL(U_LoginName_Value)+"%'";
            }

        

           

        

            ViewState["SearchTerms"] = SqlSearch;
            AspNetPager1.CurrentPageIndex = 1;
            BindData();
            TabOptionWebControls1.SelectIndex = 0;
        }


        /// <summary>
        /// 查询条件
        /// </summary>
        private string SearchTerms
        {
            get
            {
                if (ViewState["SearchTerms"] == null)
                    ViewState["SearchTerms"] = " Where U_Status<>2 and UserID!=1 ";
                return (string)ViewState["SearchTerms"];
            }
            set { ViewState["SearchTerms"] = value; }
        }

        #region "排序"
        protected void GridView1_Sorting(object sender, GridViewSortEventArgs e)
        {
            if (Orderfld == e.SortExpression)
            {
                if (OrderType == 0)
                {
                    OrderType = 1;
                }
                else
                {
                    OrderType = 0;
                }
            }
            Orderfld = e.SortExpression;
            BindData();
        }

        /// <summary>
        /// 排序字段
        /// </summary>
        public string Orderfld
        {
            get
            {
                if (ViewState["sortOrderfld"] == null)

                    ViewState["sortOrderfld"] = "UserID";

                return (string)ViewState["sortOrderfld"];
            }
            set
            {
                ViewState["sortOrderfld"] = value;
            }
        }

        /// <summary>
        /// 排序类型 1:降序 0:升序
        /// </summary>
        public int OrderType
        {

            get
            {

                if (ViewState["sortOrderType"] == null)
                    ViewState["sortOrderType"] = 1;

                return (int)ViewState["sortOrderType"];


            }

            set { ViewState["sortOrderType"] = value; }

        }
        /// <summary>
        /// 排序事件
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void GridView1_RowCreated(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.Header)
            {
                foreach (TableCell var in e.Row.Cells)
                {
                    if (var.Controls.Count > 0 && var.Controls[0] is LinkButton)
                    {
                        string Colume = ((LinkButton)var.Controls[0]).CommandArgument;
                        if (Colume == Orderfld)
                        {

                            LinkButton l = (LinkButton)var.Controls[0];
                            l.Text += string.Format("<img src='{0}' border='0'>", (OrderType == 0) ? Page.ResolveUrl("~/Manager/images/sort_asc.gif") : Page.ResolveUrl("~/Manager/images/sort_desc.gif"));
                            //Image Img = new Image();
                            //SortDirection a = GridView1.SortDirection;
                            //Img.ImageUrl = (a == SortDirection.Ascending) ? "i_p_sort_asc.gif" : "i_p_sort_desc.gif";
                            //var.Controls.Add(Img);
                        }
                    }
                }
            }
        }
        #endregion
    }
}
