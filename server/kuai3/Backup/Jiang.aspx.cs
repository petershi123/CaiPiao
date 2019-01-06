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
                int tempi = 0;
                int tempj = 1;
                DataTable dt = DbHelperSQL.Query("select top 10 *  FROM Bas_Lottery where Num3!=0 order by id desc").Tables[0];
                if (dt.Rows.Count > 0)
                {
                    string strtemp = "";
                    strtemp = "{";
                    strtemp += "\"ball1\":\"" + dt.Rows[0]["Num1"].ToString() + "\",";
                    strtemp += "\"ball2\":\"" + dt.Rows[0]["Num2"].ToString() + "\",";
                    strtemp += "\"ball3\":\"" + dt.Rows[0]["Num3"].ToString() + "\",";
                    strtemp += "\"openTime\":";
                    //9点38开第一期
                    //22.28分结束
                    int year = DateTime.Now.Year;
                    int day = DateTime.Now.Day;
                    int month = DateTime.Now.Month;
                    int hour = DateTime.Now.Hour;
                    int minute = DateTime.Now.Minute;
                    int year_add = DateTime.Now.AddDays(1).Year;
                    int day_add = DateTime.Now.AddDays(1).Day;
                    int month_add = DateTime.Now.AddDays(1).Month;
                    double cas = Convert.ToDouble(hour.ToString() + "." + (minute > 9 ? minute.ToString() :( "0" + minute.ToString())));
                    string nextdate = "";
                    if (minute%10 < 8)
                        nextdate = month + "/" + day + "/" + year + " " + hour + ":" + ((minute / 10) * 10 + 8) + ":00";
                    else if (minute >=48)
                        nextdate = month + "/" + day + "/" + year + " " + hour + ":58:00";
                    else
                        nextdate = month + "/" + day + "/" + year +" " + hour + ":" + ((minute / 10) * 10 + 18) + ":00";
                    if (cas < 9.19)
                        nextdate = month + "/" + day + "/" + year +" 09:38:00";
                    if (cas > 22.27)
                        nextdate = month + "/" + day_add + "/" + year + " 09:38:00";
                    strtemp += "\"" + nextdate + "\",";// Convert.ToDateTime(dt.Rows[0]["CreateTime"]).ToString("MM/dd/yyyy HH:mm:ss")
                    strtemp += "\"term\":\"" + dt.Rows[0]["Stage"].ToString() + "\",";
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        tempj = 1;
                        strtemp += "\"t" + tempi + "" + tempj++ + "\",";
                        strtemp += "\"" + dt.Rows[i]["Stage"].ToString() + "\",";
                        strtemp += "\"t" + tempi + "" + tempj++ + "\",";
                        strtemp += "\"" + dt.Rows[i]["Num1"].ToString() + "\",";
                        strtemp += "\"t" + tempi + "" + tempj++ + "\",";
                        strtemp += "\"" + dt.Rows[i]["Num2"].ToString() + "\",";
                        strtemp += "\"t" + tempi + "" + tempj++ + "\",";
                        strtemp += "\"" + dt.Rows[i]["Num3"].ToString() + "\",";
                        tempi++;

                    }
                    if (cas > 22.27)
                    {
                        strtemp += "\"nextTerm\":\"" + year_add % 2010 + "" + month_add + "" + day_add + "001\"";
             
                    }
                    else if (cas < 9.19)
                    {
                        year = DateTime.Now.Year;
                        day = DateTime.Now.Day;
                        month = DateTime.Now.Month;
                        strtemp += "\"nextTerm\":\"" + year % 2010 + "" + month + "" + day + "001\"";
                        //131029001
                    }
                    else
                        strtemp += "\"nextTerm\":\"" + (Convert.ToInt32(dt.Rows[0]["Stage"]) + 1) + "\"";
                    strtemp += "}";
                    Response.Write(strtemp);
                }
                else
                {
                    Response.Write("-1");
                }
                // }
            }
            catch
            {
                Response.Write("-1");
            }
            finally
            {

                Response.End();
            }
        }
    }
}
