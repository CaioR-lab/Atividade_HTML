using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebView.models;
using WebView.repository;

namespace WebView
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        private CrudJogo crud;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.crud = new CrudJogo();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Jogo model = new Jogo();
            model.Id = Convert.ToInt32(tbxid.Text);
            model.Nome = this.tbxnome.Text;
            model.Genero = this.tbxgenero.Text;
            model.Data = this.tbxlancamento.Text;
            crud.Salvar(model);
            this.Limpar();
        }
        private void Limpar()
        {
            this.tbxid.Text = string.Empty;
            this.tbxnome.Text = string.Empty;
            this.tbxgenero.Text = string.Empty;
            this.tbxlancamento.Text = string.Empty;
        }
    }
}