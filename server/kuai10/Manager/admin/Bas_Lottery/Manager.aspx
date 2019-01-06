<%@ Page Language="C#" MasterPageFile="~/Manager/MasterPage/PageTemplate.Master" AutoEventWireup="true"
    Codebehind="Manager.aspx.cs" Inherits="FrameWork.web.Manager.admin.Bas_Lottery.Manager"
    Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="PageBody" runat="server">
    <FrameWorkWebControls:HeadMenuWebControls ID="HeadMenuWebControls1" runat="server"  HeadTitleTxt="开奖">
        <%--<FrameWorkWebControls:HeadMenuButtonItem ButtonPopedom="List" ButtonUrl="Default.aspx"
            ButtonUrlType="Href" ButtonVisible="True" ButtonName="开奖" />--%>
    </FrameWorkWebControls:HeadMenuWebControls>
    <FrameWorkWebControls:TabOptionWebControls ID="TabOptionWebControls1" runat="server">
        <FrameWorkWebControls:TabOptionItem ID="TabOptionItem1" runat="server" Tab_Name="查看/修改/增加开奖">

            <table width="100%" border="0" cellspacing="1" cellpadding="3" align="center">

                <tr>
                    
                    <td class="table_body">
                        期号</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Stage_Input" title="请输入期号" runat="server" CssClass="text_input"></asp:TextBox>如：201331148
                    
                        <asp:Label ID="Stage_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        平一</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Num1_Input" title="请输入平一" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="Num1_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        平二</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Num2_Input" title="请输入平二" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="Num2_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        平三</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Num3_Input" title="请输入平三" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="Num3_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        平四</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Num4_Input" title="请输入平四" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="Num4_Disp" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td class="table_body">
                        特码</td>
                    <td class="table_none">
                     
                        <asp:TextBox ID="Num_Special_Input" title="请输入特码" runat="server" CssClass="text_input"></asp:TextBox>
                    
                        <asp:Label ID="Num_Special_Disp" runat="server"></asp:Label></td>
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
