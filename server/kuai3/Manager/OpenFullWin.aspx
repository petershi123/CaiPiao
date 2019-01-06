<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OpenFullWin.aspx.cs" Inherits="FrameWork.web.Manager.OpenFullWin" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<script language="javascript"> 
function ShowDialog(url) 
{
    var iWidth = window.screen.width - 10;
    var iHeight = window.screen.height-90;
    var iTop = 0;
    var iLeft = 0;
    newwin = window.open(url, "", "toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=yes, Width=" + iWidth + " ,Height=" + iHeight + ",top=" + iTop + ",left=" + iLeft);
  
  if(newwin == null)
    {
        alert("系统提示：您的浏览器阻止了一个弹出窗口，请点击地址栏下的弹出消息(加入信任网站) 或 按照如下设置：\r\n\r\n浏览器->工具->弹出窗口阻止程序->关闭弹出窗口阻止程序");
        document.getElementById("mes").innerHTML = "<br />系统提示：您的浏览器阻止了一个弹出窗口，请点击地址栏下的弹出消息(加入信任网站) 或 按照如下设置：<br />浏览器->工具->弹出窗口阻止程序->关闭弹出窗口阻止程序<br/><br/><img src='images/openwin.gif'/>";
//        document.getElementById("mes").innerHTML += "<br /><br /><img src='images/Title.gif' /><a href='index.aspx'>普通模式打开</a>";
        return;
    }
    window.opener = url;
  window.open('','_parent','');
  window.close();
} 
</script>
<title>Loading...</title>
</head>
<body onload="ShowDialog('admin/EXAM_Test.aspx?id=<%=getid() %>')" style="background-color: #F4FAFF">
    <form id="form1" runat="server">
    <div id="mes"></div>
    </form>
</body>
</html>
