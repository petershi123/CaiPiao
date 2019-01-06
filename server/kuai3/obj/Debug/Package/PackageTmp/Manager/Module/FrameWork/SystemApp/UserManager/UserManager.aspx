<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true" CodeBehind="UserManager.aspx.cs" Inherits="FrameWork.web.Module.FrameWork.UserManager.UserManager"  %>
<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
        <link rel="stylesheet" type="text/css" href="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/css/subModal.css" />

    <script type="text/javascript" src="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/js/common.js"></script>

    <script type="text/javascript" src="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/js/subModal.js"></script>

    <FrameWorkWebControls:HeadMenuWebControls ID="HeadMenuWebControls1" runat="server"
        HeadOPTxt="学生资料" HeadTitleTxt="学生资料管理">
        <FrameWorkWebControls:HeadMenuButtonItem ButtonName="学生" ButtonPopedom="List" ButtonUrl="Default.aspx"
            ButtonUrlType="Href" ButtonVisible="True" />
    </FrameWorkWebControls:HeadMenuWebControls>
    <FrameWorkWebControls:TabOptionWebControls ID="TabOptionWebControls1" runat="server">
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem1" runat="server" Tab_Name="学生帐号">
        <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">
		<tr>
			<td class="table_body table_body_NoWidth" style="height: 28px" >
                用户名</td>
			<td class="table_none table_none_NoWidth" style="height: 28px" >
                <asp:TextBox ID="U_LoginName" title="请输入用户名~20:!" runat="server" CssClass="text_input"></asp:TextBox>
                <asp:Label ID="U_LoginName_Value" runat="server"></asp:Label></td>
			<td class="table_body table_body_NoWidth" style="height: 28px" >
                密码</td>
			<td class="table_none table_none_NoWidth" style="height: 28px" >
                <asp:TextBox ID="U_Password"  title="请输入密码~32:!" runat="server" CssClass="text_input"></asp:TextBox>
                <asp:Label ID="U_Password_Value" runat="server" ></asp:Label></td>            
		</tr>
                 <tr>
                <td class="table_body table_body_NoWidth" >
                    姓名</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_CName" title="请输入中文名~20:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_CName_Value" runat="server" Text=""></asp:Label></td>
            
                  <td class="table_body table_body_NoWidth" >
                    身份证号码
                </td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_IDCard" title="请输入身份证号码~30:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_IDCard_Value" runat="server" Text=""></asp:Label></td>
            </tr>
           
		 <tr>
                <td class="table_body table_body_NoWidth" >
                    最大借阅数</td>
                <td class="table_none table_none_NoWidth" >
                    <asp:TextBox ID="U_Title" title="请输入中文名~20:" runat="server" CssClass="text_input"></asp:TextBox>
                    <asp:Label ID="U_Title_Value" runat="server" Text=""></asp:Label></td>
            
                  <td class="table_body table_body_NoWidth" >
                    借阅标志
                </td>
                <td class="table_none table_none_NoWidth" >
                  <asp:DropDownList ID="U_Status" runat="server">
                    <asp:ListItem Value="0">有效</asp:ListItem>
                    <asp:ListItem Value="1">无效</asp:ListItem>
                    </asp:DropDownList>
                    <asp:Label ID="U_Status_Value" runat="server" Text=""></asp:Label>
                </td>
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
                    备注说明</td>
                <td class="table_none table_none_NoWidth"  colspan="3">
                    <asp:TextBox ID="U_Remark" title="请输入备注说明~2000:" runat="server" Rows="5" TextMode="MultiLine" CssClass="tex_input"></asp:TextBox>
                    <asp:Label ID="U_Remark_Value" runat="server" Text=""></asp:Label></td>
            </tr>
           
		</table>      
        </FrameWorkWebControls:TabOptionItem></FrameWorkWebControls:TabOptionWebControls>
      
    <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center" id="PostButton" runat="server">
		<tr>
			<td align="right">
            <asp:Button ID="Button1" runat="server" CssClass="button_bak" Text="确定" OnClick="Button1_Click" />
            <input id="Reset1" class="button_bak" type="reset" value="重填" />
            </td>
        </tr>
    </table>    
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
    
    
    function AlertMessageBox(file_name)
    {

	        if (file_name!=undefined){
	            var ShValues = file_name.split('||');
	            if (ShValues[1]!=0)
	            {
	               
	        }
	         
    }
    
       
        

      
        
        function ClearSelect()
        {
        }
    </script>
</asp:Content>
