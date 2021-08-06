using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    //mudar props depois
    public class Album : BaseModel
    {
        public string Nome { get; set; }
        public string Artista { get; set; }
    }
}