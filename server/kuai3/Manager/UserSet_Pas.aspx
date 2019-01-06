<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true" CodeBehind="UserSet_Pas.aspx.cs" Inherits="FrameWork.web.UserSet_Pas"  %>
<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
        <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">
		    <tr>
			    <td class="table_body">
                    用户名</td>
			    <td class="table_none" >
                    <asp:Label ID="U_LoginName_Txt" runat="server"></asp:Label></td>
		    </tr>
            <tr>
                <td class="table_body">
                    原始密码</td>
                <td class="table_none">
                    <asp:TextBox ID="Old_U_Password" TextMode="Password" title="请输入原始密码~20:" runat="server" CssClass="text_input"></asp:TextBox></td>
            </tr>
            <tr>
                <td class="table_body">
                    新密码</td>
                <td class="table_none">
                    <asp:TextBox ID="New_U_Password" TextMode="Password" title="请输入新密码~20:" runat="server" CssClass="text_input"></asp:TextBox></td>
            </tr>
            <tr>
                <td class="table_body" nowrap>
                    重新输入新密码</td>
                <td class="table_none">
                    <asp:TextBox ID="ReNew_U_Password" TextMode="Password" title="请重新输入新密码~20:" runat="server" CssClass="text_input"></asp:TextBox></td>
            </tr>

            <tr>
                <td align="right" colspan="2">
                                    <asp:Button ID="Button1" runat="server" CssClass="button_bak" Text="确定" OnClick="Button1_Click" />
                    <input id="Reset1" class="button_bak" type="reset" value="重填" />
                </td>
            </tr>
		</table>
</asp:Content>
