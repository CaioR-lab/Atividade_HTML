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

        public Produto AcharID(int id)
        {
            Produto model = produtos.Find(p => p.id == id);
            return model;
        }
        //public void Editar(Produto model)
        //{
        //    model.id = 


        //}
        public void Deletar(Produto model)
        {
            produtos.Remove(model);
        }

    }
}