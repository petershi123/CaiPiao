
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
using FrameWork.WebControls;

namespace FrameWork.web.Manager.admin.Bas_Lottery
{
    public partial class Manager : System.Web.UI.Page
    {
        Int32 IDX = (Int32)Common.sink("IDX", MethodType.Get, 10, 0, DataType.Int);
        string CMD = (string)Common.sink("CMD", MethodType.Get, 10, 1, DataType.Str);
        protected void Page_Load(object sender, EventArgs e)
        {
            FrameWorkPermission.CheckPagePermission(CMD);
            if (!Page.IsPostBack)
            {
                DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery  order by id desc ").Tables[0];
                if (dt.Rows.Count > 0)
                {
                    if (dt.Rows[0]["Num_Special"].ToString() != "0")
                    {
                        DbHelperSQL.ExecuteSql("INSERT INTO Bas_Lottery (Stage,Num1,Num2,Num3,Num4,Num_Special) VALUES ('" +( Convert.ToInt32(dt.Rows[0]["Stage"]) + 1) + "','0','0','0','0','0')");
                        string OpTxt1 = string.Format("{0}期开奖完毕，开始进入下一期!", dt.Rows[0]["Stage"]);
                        EventMessage.MessageBox(1, "开奖完毕", OpTxt1, Icon_Type.OK, Common.GetHomeBaseUrl("Manager.aspx?IDX=" + (Convert.ToInt32(dt.Rows[0]["ID"]) + 1).ToString() + "&CMD=Edit"));

                    }
                }
                OnStart();
            }
        }

        /// <summary>
        /// 开始操作
        /// </summary>
        private void OnStart()
        {
            Bas_LotteryEntity ut = BusinessFacade.Bas_LotteryDisp(IDX);
            OnStartData(ut);
            switch (CMD)
            {
                case "New":
                    DataTable dt = DbHelperSQL.Query("select top 1 Stage FROM Bas_Lottery order by ID desc").Tables[0];
                    if (dt.Rows.Count > 0)
                        Stage_Input.Text = (Convert.ToInt32(dt.Rows[0][0]) + 1).ToString();
                    else
                        Stage_Input.Text = "请输入首期号";
                    TabOptionItem1.Tab_Name = HeadMenuWebControls1.HeadOPTxt = "增加开奖";
                    Hidden_Disp();
                    break;
                case "List":
                    TabOptionItem1.Tab_Name = HeadMenuWebControls1.HeadOPTxt = "查看开奖";
                    Hidden_Input();
                    ButtonOption.Visible = false;
                    AddEditButton();
                    break;
                case "Edit":
                    TabOptionItem1.Tab_Name = HeadMenuWebControls1.HeadOPTxt = "修改";
                    Hidden_Disp();
                    AddDeleteButton();
                    break;
                case "Delete":
                    ut.DataTable_Action_ = DataTable_Action.Delete;
                    if (BusinessFacade.Bas_LotteryInsertUpdateDelete(ut) > 0)
                    {
                        EventMessage.MessageBox(1, "删除成功", string.Format("删除ID:{0}成功!", IDX), Icon_Type.OK, Common.GetHomeBaseUrl("Default.aspx"));
                    }
                    else
                    {
                        EventMessage.MessageBox(1, "删除失败", string.Format("删除ID:{0}失败!", IDX), Icon_Type.Error, Common.GetHomeBaseUrl("Default.aspx"));
                    }
                    break;
                default:
                    EventMessage.MessageBox(2, "不存在操作字符串!", "不存在操作字符串!", Icon_Type.Error, Common.GetHomeBaseUrl("Default.aspx"));
                    break;
            }
        }

        /// <summary>
        /// 增加修改按钮
        /// </summary>
        private void AddEditButton()
        {
            //HeadMenuButtonItem bi = new HeadMenuButtonItem();
            //bi.ButtonPopedom = PopedomType.Edit;
            //bi.ButtonName = "Bas_Lottery";
            //bi.ButtonUrl = string.Format("?CMD=Edit&IDX={0}", IDX);
            //HeadMenuWebControls1.ButtonList.Add(bi);
        }


        /// <summary>
        /// 增加删除按钮
        /// </summary>
        private void AddDeleteButton()
        {
            //HeadMenuButtonItem bi = new HeadMenuButtonItem();
            //bi.ButtonPopedom = PopedomType.Delete;
            //bi.ButtonName = "Bas_Lottery";
            //bi.ButtonUrlType = UrlType.JavaScript;
            //bi.ButtonUrl = string.Format("DelData('?CMD=Delete&IDX={0}')", IDX);
            //HeadMenuWebControls1.ButtonList.Add(bi);

            //HeadMenuButtonItem bi1 = new HeadMenuButtonItem();
            //bi1.ButtonPopedom = PopedomType.List;
            //bi1.ButtonIcon = "back.gif";
            //bi1.ButtonName = "返回";
            //bi1.ButtonUrl = string.Format("?CMD=List&IDX={0}", IDX);
            //HeadMenuWebControls1.ButtonList.Add(bi1);
        }

        /// <summary>
        /// 初始化数据
        /// </summary>
        /// <param name="ut"></param>
        private void OnStartData(Bas_LotteryEntity ut)
        {
            Stage_Input.Text = Stage_Disp.Text = ut.Stage.ToString();
            Num1_Input.Text = Num1_Disp.Text = ut.Num1.ToString() == "0" ? "" : ut.Num1.ToString();
            Num2_Input.Text = Num2_Disp.Text = ut.Num2.ToString() == "0" ? "" : ut.Num2.ToString();
            Num3_Input.Text = Num3_Disp.Text = ut.Num3.ToString() == "0" ? "" : ut.Num3.ToString();
            Num4_Input.Text = Num4_Disp.Text = ut.Num4.ToString() == "0" ? "" : ut.Num4.ToString();
            Num_Special_Input.Text = Num_Special_Disp.Text = ut.Num_Special.ToString() == "0" ? "" : ut.Num_Special.ToString();
            
        }

        /// <summary>
        /// 隐藏输入框
        /// </summary>
        private void Hidden_Input()
        {
            Stage_Input.Visible = false;
            Num1_Input.Visible = false;
            Num2_Input.Visible = false;
            Num3_Input.Visible = false;
            Num4_Input.Visible = false;
            Num_Special_Input.Visible = false;

        }

        /// <summary>
        /// 隐藏显示框
        /// </summary>
        private void Hidden_Disp()
        {
            Stage_Disp.Visible = false;
            Num1_Disp.Visible = false;
            Num2_Disp.Visible = false;
            Num3_Disp.Visible = false;
            Num4_Disp.Visible = false;
            Num_Special_Disp.Visible = false;

        }

        /// <summary>
        /// 增加/修改事件
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button1_Click(object sender, EventArgs e)
        {

            int Stage_Value = (int)Common.sink(Stage_Input.UniqueID, MethodType.Post, 10, 1, DataType.Int);
            int Num1_Value = (int)Common.sink(Num1_Input.UniqueID, MethodType.Post, 10, 0, DataType.Int);
            int Num2_Value = (int)Common.sink(Num2_Input.UniqueID, MethodType.Post, 10, 0, DataType.Int);
            int Num3_Value = (int)Common.sink(Num3_Input.UniqueID, MethodType.Post, 10, 0, DataType.Int);
            int Num4_Value = (int)Common.sink(Num4_Input.UniqueID, MethodType.Post, 10, 0, DataType.Int);
            int Num_Special_Value = (int)Common.sink(Num_Special_Input.UniqueID, MethodType.Post, 10, 0, DataType.Int);

        

            Bas_LotteryEntity ut = BusinessFacade.Bas_LotteryDisp(IDX);

            ut.Stage = Stage_Value;
            ut.Num1 = Num1_Value;
            ut.Num2 = Num2_Value;
            ut.Num3 = Num3_Value;
            ut.Num4 = Num4_Value;
            ut.Num_Special = Num_Special_Value; 

            if (CMD == "New")
            {
                ut.DataTable_Action_ = DataTable_Action.Insert;
            }
            else if (CMD == "Edit")
            {
                ut.DataTable_Action_ = DataTable_Action.Update;
            }
            else
            {
                EventMessage.MessageBox(2, "不存在操作字符串!", "不存在操作字符串!", Icon_Type.Error, Common.GetHomeBaseUrl("Default.aspx"));
            }
            Int32 rInt = BusinessFacade.Bas_LotteryInsertUpdateDelete(ut);
            if (rInt > 0)
            {
              
                string OpTxt = string.Format("增加开奖成功!(ID:{0})", rInt);
                if (ut.DataTable_Action_ == DataTable_Action.Update)
                {
                    //OpTxt = string.Format("修改开奖成功!(ID:{0})", IDX);
                    //EventMessage.MessageBox(1, "开奖成功", OpTxt, Icon_Type.OK, Common.GetHomeBaseUrl("Manager.aspx?IDX=" + IDX.ToString() + "&CMD=Edit"));
                    Response.Redirect(Common.GetHomeBaseUrl("Manager.aspx?IDX=" + IDX.ToString() + "&CMD=Edit"));
                }
                else
                {

                    //EventMessage.MessageBox(1, "新增成功", OpTxt, Icon_Type.OK, Common.GetHomeBaseUrl("Manager.aspx?IDX=" + rInt.ToString() + "&CMD=Edit"));
                    Response.Redirect(Common.GetHomeBaseUrl("Manager.aspx?IDX=" + rInt.ToString() + "&CMD=Edit"));
                }
            }
            else if (rInt == -2)
            {
                EventMessage.MessageBox(1, "操作失败", "操作失败,存在相同的键值(用户名/数据)!", Icon_Type.Alert, Common.GetHomeBaseUrl("Default.aspx"));
            }
            else
            {
                EventMessage.MessageBox(1, "操作失败", string.Format("操作失败,返回值:{0}!", rInt), Icon_Type.Error, Common.GetHomeBaseUrl("Default.aspx"));
            }
        }
    }
}
