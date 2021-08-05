using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Webapp.Models;

namespace Webapp.Repository
{
    public class ProdutoRepository
    {
        private static List<Produto> produtos = new List<Produto>();
        public void Salvar(Produto model)
        {
            produtos.Add(model);
        }

        public List<Produto> Lista()
        {
            return produtos;
        }
    }
}