<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true"
    Codebehind="Manager.aspx.cs" Inherits="FrameWork.web.Manager.admin.Bas_User.Manager"
    Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
    <FrameWorkWebControls:HeadMenuWebControls ID="HeadMenuWebControls1" runat="server"  HeadTitleTxt="会员">
        <FrameWorkWebControls:HeadMenuButtonItem ButtonPopedom="List" ButtonUrl="Default.aspx"
            ButtonUrlType="Href" ButtonVisible="True" ButtonName="会员" />
    </FrameWorkWebControls:HeadMenuWebControls>
    <FrameWorkWebControls:TabOptionWebControls ID="TabOptionWebControls1" runat="server">
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem1" runat="server" Tab_Name="查看/修改/增加会员">
            <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">

                <tr>
                    <td class="table_body">
                        
                        用户名</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="UserName_Input" title="请输入用户名~500:!" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="UserName_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        密码</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="PassWord_Input" title="请输入密码~500:!" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="PassWord_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        联系方式</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="MAC_Input" title="请输入联系方式~500:" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="MAC_Disp" runat="server"></asp:Label></td>
                </tr>

                              
                <tr id="ButtonOption" runat="server">
                    <td align="right" colspan="2">
                        <asp:Button ID="Button1" runat="server" CssClass="button_bak" Text="确定" OnClick="Button1_Click" />
                        <input id="Reset1" class="button_bak" type="reset" value="重填" />
                    </td>
                </tr>
            </table>
        </FrameWorkWebControls:TabOptionItem>
    </FrameWorkWebControls:TabOptionWebControls>
</asp:Content>
