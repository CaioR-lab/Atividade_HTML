<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Cadastro.aspx.cs" Inherits="WebView.WebForm3" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="content/css/style_default.css" rel="stylesheet" />
    <link href="content/css/style_cadastro.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contentbody" runat="server">
    <div id="cad">
                <div class="cadelemento">
                    <label for="">Id:</label><asp:TextBox ID="tbxid" runat="server"></asp:TextBox>
                </div>
                <div class="cadelemento">
                    <label for="">Nome:</label><asp:TextBox ID="tbxnome" runat="server"></asp:TextBox>
                </div>
                <div class="cadelemento">
                    <label for="">Genero:</label><asp:TextBox ID="tbxgenero" runat="server"></asp:TextBox>
                </div>
                <div class="cadelemento">
                    <label for="">Lançamento:</label><asp:TextBox ID="tbxlancamento" runat="server"></asp:TextBox>
                </div>
                <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
        </div>
</asp:Content>
