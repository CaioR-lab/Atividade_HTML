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

        public List<Produto> Read()
        {
            return produtos;
        }

        public Produto Read(int id)
        {
            return produtos.Find(p => p.id == id);
        }
        public void Editar(Produto model)
        {
            int index = produtos.FindIndex(p => p.id == model.id);

            produtos[index] = model;

        }
        public void Deletar(int id)
        {
            Produto model = Read(id);
            if (model != null)
            {
            produtos.Remove(model);
            }
        }

    }
}