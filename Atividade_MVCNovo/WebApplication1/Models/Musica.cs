using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    //mudar props depois
    public class Musica : BaseModel
    {
        public string Nome { get; set; }
        [Display(Name = "Gênero")]
        public string Genero { get; set; }
    }
}