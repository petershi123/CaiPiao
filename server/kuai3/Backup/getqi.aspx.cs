using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FrameWork.web
{
    public partial class getqi : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (Request.QueryString["type"] == null)
                {
                    DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery order by id desc ").Tables[0];
                    if (dt.Rows.Count > 0)
                    {
                        Response.Write(dt.Rows[0]["Stage"].ToString());
                    }
                    else
                    {
                        Response.Write("-1");
                    }
                }
                else if (Request.QueryString["type"] == "1")
                {
                    //qi=201325516&hao=6-11-13-3-18
                    DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery where Num1!=0 and Num2!=0 and Num3!=0 and Num4!=0 and Num_Special!=0 order by id desc ").Tables[0];
                  
                    if (dt.Rows.Count > 0)
                    {
                        string strtemp = "";
                        strtemp += dt.Rows[0]["Stage"].ToString() + ",";
                        strtemp += (dt.Rows[0]["Num1"].ToString() == "0" ? "" : dt.Rows[0]["Num1"].ToString()) + ",";
                        strtemp += (dt.Rows[0]["Num2"].ToString() == "0" ? "" : dt.Rows[0]["Num2"].ToString()) + ",";
                        strtemp += (dt.Rows[0]["Num3"].ToString() == "0" ? "" : dt.Rows[0]["Num3"].ToString()) + "";
                        //strtemp += (dt.Rows[0]["Num4"].ToString() == "0" ? "" : dt.Rows[0]["Num4"].ToString()) + ",";
                        //strtemp += dt.Rows[0]["Num_Special"].ToString() == "0" ? "" : dt.Rows[0]["Num_Special"].ToString();
                        Response.Write(strtemp);
                    }
                    else
                    {
                        Response.Write("-1");
                    }

                }
                else 
                {
                    //qi=201325516&hao=6-11-13-3-18
                    DataTable dt = DbHelperSQL.Query("select top 1 *  FROM Bas_Lottery where Num1!=0 and Num2!=0 and Num3!=0 and Num4!=0 and Num_Special!=0 order by id desc ").Tables[0];

                    if (dt.Rows.Count > 0)
                    {
                        string strtemp = "qi=";
                        strtemp += dt.Rows[0]["Stage"].ToString() + "&hao=";
                        strtemp += (dt.Rows[0]["Num1"].ToString() == "0" ? "" : dt.Rows[0]["Num1"].ToString()) + "-";
                        strtemp += (dt.Rows[0]["Num2"].ToString() == "0" ? "" : dt.Rows[0]["Num2"].ToString()) + "-";
                        strtemp += (dt.Rows[0]["Num3"].ToString() == "0" ? "" : dt.Rows[0]["Num3"].ToString()) + "-";
                        strtemp += (dt.Rows[0]["Num4"].ToString() == "0" ? "" : dt.Rows[0]["Num4"].ToString()) + "-";
                        strtemp += dt.Rows[0]["Num_Special"].ToString() == "0" ? "" : dt.Rows[0]["Num_Special"].ToString();
                        Response.Write(strtemp);
                    }
                    else
                    {
                        Response.Write("-1");
                    }

                }
            }
            catch
            {
                Response.Write("-1");
            }
            finally {

                Response.End();
            }
        }
    }
}
