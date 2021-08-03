<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Listagem.aspx.cs" Inherits="WebView.WebForm2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="content/css/style_default.css" rel="stylesheet" />
    <link href="content/css/style_listagem.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contentbody" runat="server">
    <div id="tabela">
        <asp:GridView ID="dgvjogos" runat="server" OnRowDeleting="dgvjogos_RowDeleting" OnSelectedIndexChanged="dgvjogos_SelectedIndexChanged">
            <Columns>
                <asp:ButtonField ButtonType="Button" Text="Editar" />
                <asp:ButtonField ButtonType="Button" Text="Deletar" />
            </Columns>
        </asp:GridView>
</div>
</asp:Content>
