<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true" ValidateRequest="false" CodeBehind="BAS_UserInfo.aspx.cs" Inherits="FrameWork.web.Manager.admin.BAS_UserInfo"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
    <FrameWorkWebControls:HeadMenuWebControls ID="HeadMenuWebControls1"  runat="server"  HeadTitleTxt="后台主页">
    </FrameWorkWebControls:HeadMenuWebControls>
    <FrameWorkWebControls:TabOptionWebControls ID="TabOptionWebControls1" runat="server">
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem1" runat="server" Tab_Name="个人信息">
              

                   <%-- <tr>
                        <td class="table_body">
                            系统名称</td>
                        <td class="table_none">
                            <asp:Label ID="SystemName" runat="server"></asp:Label></td>
                    </tr>
                    <tr>
                        <td class="table_body">
                            框架版本</td>
                        <td class="table_none">
                            <asp:Label ID="FrameWorkVer" runat="server"></asp:Label></td>
                    </tr>
                    <tr>
                        <td class="table_body">
                            官方网站</td>
                        <td class="table_none">
                            <asp:HyperLink ID="FrameWorkWeb" runat="server" Target="_blank"></asp:HyperLink></td>
                    </tr>        --%>   
                    
                   <%-- Manager/Module/FrameWork/SystemApp/UserManager/UserManager.aspx?UserID=2&CMD=List --%>     
                   
                   <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">
            <tr>
                <td class="table_body table_body_NoWidth" >
                    编号</td>
                <td class="table_none table_none_NoWidth">                    
                    <asp:Label ID="U_UserNO_Value" runat="server" Text=""></asp:Label></td>
                <td class="table_body table_body_NoWidth" rowspan="3">
                    照片</td>
                <td class="table_none table_none_NoWidth" rowspan="3">
                    <asp:Image ID="U_PhotoUrl_Value" border=0 runat="server" onclick="javascript:window.open(MaxImgUrl)" style="cursor:pointer" title="点击放大" />
                    
                    <asp:FileUpload ID="U_PhotoUrl" runat="server" contentEditable=false CssClass="text_input" /></td>
            </tr>
            <tr>
                <td class="table_body table_body_NoWidth" >
                    中文名</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_CName" title="请输入中文名~20:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_CName_Value" runat="server" Text=""></asp:Label></td>
            </tr>
            <tr>
                <td class="table_body table_body_NoWidth" >
                    英文名</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_EName" title="请输入英文名~50:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_EName_Value" runat="server" Text=""></asp:Label></td>
            </tr>
		<tr>
			<td class="table_body table_body_NoWidth" >
                    性别</td>
			<td class="table_none table_none_NoWidth" >
                <asp:DropDownList ID="U_Sex" runat="server">
                <asp:ListItem Value="1">男</asp:ListItem>
                <asp:ListItem Value="0">女</asp:ListItem>
                </asp:DropDownList>
                <asp:Label ID="U_Sex_Value" runat="server" Text=""></asp:Label></td>
			<td class="table_body table_body_NoWidth" >
                    出生年月</td>
			<td class="table_none table_none_NoWidth" >
                <asp:TextBox ID="U_BirthDay" title="请输入出生年月~:date" runat="server" CssClass="text_input" onfocus="javascript:HS_setDate(this);"></asp:TextBox>
                <asp:Label ID="U_BirthDay_Value" runat="server" Text=""></asp:Label></td>            
		</tr>
            <tr>
                <td class="table_body table_body_NoWidth" >
                    电话</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_HomeTel" title="请输入电话~20:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_HomeTel_Value" runat="server" Text=""></asp:Label></td>
                <td class="table_body table_body_NoWidth" >
                    手机号</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_MobileNo" title="请输入手机号~15:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_MobileNo_Value" runat="server" Text=""></asp:Label></td>
            </tr>
            <tr>
                <td class="table_body table_body_NoWidth" >
                    邮件地址</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_Email" runat="server" CssClass="text_input" 
                        title="请输入邮件地址~100:email"></asp:TextBox>
                    <asp:Label ID="U_Email_Value" runat="server" Text=""></asp:Label>
                </td>
                <td class="table_body table_body_NoWidth" >
                    &nbsp;</td>
                <td class="table_none table_none_NoWidth" >
                    &nbsp;</td>
            </tr>
           
            <tr id="DispTr" runat="server" visible="false">
                <td class="table_body table_body_NoWidth" >
                    最后访问IP</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:Label ID="U_LastIP_Value" runat="server" Text=""></asp:Label></td>
                <td class="table_body table_body_NoWidth" >
                    最后操作时间</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:Label ID="U_LastDateTime_Value" runat="server" Text=""></asp:Label></td>
            </tr>
		</table>   
	
        </FrameWorkWebControls:TabOptionItem>
        
    </FrameWorkWebControls:TabOptionWebControls>   
    <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center" id="PostButton" runat="server">
		<tr>
			<td align="right">
            <asp:Button ID="Button1" runat="server" CssClass="button_bak" Text="确定" OnClick="Button1_Click" />
            <input id="Reset1" class="button_bak" type="reset" value="重填" />
            </td>
        </tr>
    </table> 
    <br/>
    

 <script language="javascript">
       var MaxImgUrl = "<%=MaxImgUrl %>"; 
        rnd.today=new Date(); 

    rnd.seed=rnd.today.getTime(); 

    function rnd() { 

　　　　rnd.seed = (rnd.seed*9301+49297) % 233280; 

　　　　return rnd.seed/(233280.0); 

    }; 

    function rand(number) { 

　　　　return Math.ceil(rnd()*number);

};


function SelectAll() {
    var e = document.getElementsByTagName("input");
    var IsTrue;
    if (document.getElementById("CheckboxAll").value == "0") {
        IsTrue = true;
        document.getElementById("CheckboxAll").value = "1"
    }
    else {
        IsTrue = false;
        document.getElementById("CheckboxAll").value = "0"
    }
    for (var i = 0; i < e.length; i++) {
        if (e[i].type == "checkbox") {
            e[i].checked = IsTrue;
        }
    }
}
function deleteop() {
    var checkok = false;
    var e = document.getElementsByTagName("input");
    for (var i = 0; i < e.length; i++) {
        if (e[i].type == "checkbox") {
            if (e[i].checked == true) {
                checkok = true;
                break;
            }
        }
    }
    if (checkok)
        return confirm('删除后不可恢复,确认要批量删除选中记录吗？');
    else {

        alert("请选择要删除的记录!");
        return false;
    }
}
function deleteop1() {
    var checkok = false;
    var e = document.getElementsByTagName("input");
    for (var i = 0; i < e.length; i++) {
        if (e[i].type == "checkbox") {
            if (e[i].checked == true) {
                checkok = true;
                break;
            }
        }
    }
    if (checkok)
        return confirm('确认要执行吗？');
    else {

        alert("请选择要操作的记录!");
        return false;
    }
}
</script>
</asp:Content>
