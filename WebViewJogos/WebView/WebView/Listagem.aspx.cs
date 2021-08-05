using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebView.repository;

namespace WebView
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        private CrudJogo crud;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.crud = new CrudJogo();
            this.dgvjogos.DataSource = crud.Listar();
            this.dgvjogos.DataBind();
        }

        protected void dgvjogos_SelectedIndexChanged(object sender, EventArgs e)
        {
           
        }

        protected void dgvjogos_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int linha = e.RowIndex;
            int id = Convert.ToInt32(this.dgvjogos.Rows[linha].Cells[1].Text);
            crud.Deletar(id);
            this.dgvjogos.DataSource = crud.Listar();
            this.dgvjogos.DataBind();
        }
    }
}