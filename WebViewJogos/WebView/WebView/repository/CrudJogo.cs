using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebView.models;

namespace WebView.repository
{
    public class CrudJogo
    {
        private static List<Jogo> Jogos = new List<Jogo>();

        public void Salvar(Jogo model)
        {
            Jogos.Add(model);

        }

        public void Atualizar(Jogo model, Jogo ModelID)
        {
            ListarID(ModelID);
            ModelID = model;
            
        }

        public Jogo ListarID(Jogo model)
        {
            Jogo ModelID = Jogos.Find(j => j.Id == model.Id);
            return ModelID;
        }
        public List<Jogo> Listar()
        {
            return Jogos;
            
        }

        public void Deletar(Jogo JogoID)
        {
            Listar();
            Jogos.Remove(JogoID);
        }


    }
}