using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FrameWork.web
{
    public partial class Jiang : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                // string id = Request.QueryString["id"];
                //if (Request.QueryString["id"] != null && Request.QueryString["id"].ToString() == "5")
                //{
                //    DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery where Num1!=0 order by id desc").Tables[0];
                //    if (dt.Rows.Count > 0)
                //    {
                //        string strtemp = "";
                //        strtemp += (dt.Rows[0]["Num1"].ToString() == "0" ? "" : dt.Rows[0]["Num1"].ToString()) + ",";
                //        strtemp += (dt.Rows[0]["Num2"].ToString() == "0" ? "" : dt.Rows[0]["Num2"].ToString()) + ",";
                //        strtemp += (dt.Rows[0]["Num3"].ToString() == "0" ? "" : dt.Rows[0]["Num3"].ToString()) + ",";
                //        strtemp += (dt.Rows[0]["Num4"].ToString() == "0" ? "" : dt.Rows[0]["Num4"].ToString()) + ",";
                //        strtemp += dt.Rows[0]["Num_Special"].ToString() == "0" ? "" : dt.Rows[0]["Num_Special"].ToString();
                //        Response.Write(strtemp);
                //    }
                //    else
                //    {
                //        Response.Write("-1");
                //    }
                //}
                //else
                //{
                DataTable dt;
                string id = Request.QueryString["id"];
                if (id != null)
                {
                    dt = DbHelperSQL.Query("select top 1 * FROM Bas_Lottery where Stage=" + id).Tables[0];
                }
                else
                {
                    dt = DbHelperSQL.Query("select top 1 * FROM Bas_Lottery where Num1!=0 order by id desc").Tables[0];
                }
                if (dt.Rows.Count > 0)
                {
                    string strtemp = "";
                    strtemp += dt.Rows[0]["Num1"].ToString() =="0"?",": dt.Rows[0]["Num1"].ToString() + ",";
                    strtemp += dt.Rows[0]["Num2"].ToString() == "0" ? "," : dt.Rows[0]["Num2"].ToString() + ",";
                    strtemp += dt.Rows[0]["Num3"].ToString() == "0" ? "," : dt.Rows[0]["Num3"].ToString() + ",";
                    strtemp += dt.Rows[0]["Num4"].ToString() == "0" ? "," : dt.Rows[0]["Num4"].ToString() + ",";
                    strtemp += dt.Rows[0]["Num_Special"].ToString() == "0" ? "" : dt.Rows[0]["Num_Special"].ToString();
                    Response.Write(strtemp);
                }
                else
                {
                    Response.Write(",,,,");
                }
                // }
            }
            catch
            {
                Response.Write(",,,,");
            }
            finally
            {

                Response.End();
            }
        }
    }
}
