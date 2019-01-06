﻿<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true"
    Codebehind="Default1.aspx.cs" Inherits="FrameWork.web.Module.FrameWork.UserManager.Default1"
    %>

<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
    <link rel="stylesheet" type="text/css" href="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/css/subModal.css" />

    <script type="text/javascript" src="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/js/common.js"></script>

    <script type="text/javascript" src="<%=Page.ResolveUrl("~/") %>Manager/inc/FineMessBox/js/subModal.js"></script>

    <FrameWorkWebControls:HeadMenuWebControls ID="HeadMenuWebControls1" runat="server"
        ButtonList-Capacity="4" HeadOPTxt="图书借阅" HeadTitleTxt="图书借阅" HeadHelpTxt="">
     
    </FrameWorkWebControls:HeadMenuWebControls>
    <FrameWorkWebControls:TabOptionWebControls ID="TabOptionWebControls1" runat="server">
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem1" runat="server" Tab_Name="图书借阅">
            <asp:GridView ID="GridView1" runat="server" OnSorting="GridView1_Sorting" OnRowCreated="GridView1_RowCreated">
                <Columns>
                    <asp:HyperLinkField SortExpression="U_LoginName" HeaderText="用户名" DataTextField="U_LoginName" DataNavigateUrlFields="UserID"
                        DataNavigateUrlFormatString="UserManager.aspx?UserID={0}&CMD=Edit" />
                    <asp:BoundField SortExpression="U_CName" HeaderText="姓名" DataField="U_CName" />
                 
                 
                    <asp:BoundField SortExpression="U_IDCard" HeaderText="读者身份证" DataField="U_IDCard" />
                    <asp:BoundField SortExpression="U_Title" HeaderText="最大借阅数" DataField="U_Title" />
                    <asp:TemplateField SortExpression="U_Status" HeaderText="借阅标志">
                        <ItemTemplate>
                            <%#GetStat((int)Eval("U_Status"))%>
                        </ItemTemplate>
                    </asp:TemplateField>
                       <asp:TemplateField  HeaderText=""> 
                        <ItemTemplate>
                        <a style=" display: <%#Eval("U_Status").ToString() == "1" ? "" : "none"%>" >停止借阅</a>
                        <a  style=" display: <%#Eval("U_Status").ToString() == "1" ? "none" : ""%>" href="/Manager/admin/REL_BORROW/Manager.aspx?bh=<%#Eval("U_LoginName")%>&CMD=New">借书登记单</a>
                        </ItemTemplate>
                        <ItemStyle Wrap="True" />  
                        
                        <HeaderStyle Wrap="False" />    
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
            <FrameWorkWebControls:AspNetPager ID="AspNetPager1" runat="server" OnPageChanged="AspNetPager1_PageChanged">
            </FrameWorkWebControls:AspNetPager>
        </FrameWorkWebControls:TabOptionItem>
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem2" runat="server" Tab_Name="查询">
            <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">
                <tr>
                    <td class="table_body table_body_NoWidth">
                        用户名</td>
                    <td class="table_none table_none_NoWidth">
                        <asp:TextBox ID="U_LoginName" runat="server" CssClass="text_input"></asp:TextBox></td>
                    
                </tr>
              
                <tr>
                    <td colspan="4" align="right">
                        <asp:Button ID="Button1" runat="server" CssClass="button_bak" Text="查询" OnClick="Button1_Click" /></td>
                </tr>
            </table>
        </FrameWorkWebControls:TabOptionItem>
    </FrameWorkWebControls:TabOptionWebControls>

    <script language="javascript">
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
	                document.all.<%=U_GroupID_Txt_ID %>.value=ShValues[0];
	                document.all.<%=U_GroupID_ID %>.value=ShValues[1];
	            }
	        }
	         
    }
      function ShowDepartID()
        {
            showPopWin('选择部门','SelectGroup.aspx?'+rand(10000000), 215, 255, AlertMessageBox,true,true)
        }
        function ClearSelect()
        {
   	        document.all.<%=U_GroupID_Txt_ID %>.value="";
            document.all.<%=U_GroupID_ID %>.value="";
        }
    </script>

</asp:Content>
