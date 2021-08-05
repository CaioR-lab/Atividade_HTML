using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Webapp.Models;
using Webapp.Repository;

namespace Webapp.Controllers
{
    public class HomeController : Controller
    {
        ProdutoRepository repository = new ProdutoRepository();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Lista()
        {
            List<Produto> model = repository.Lista();
            ViewBag.Message = "Your application description page.";

            return View(model);
        }

        public ActionResult Cadastro()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Salvar(Produto model)
        {
            repository.Salvar(model);
            return RedirectToAction("Lista");
        }

        public ActionResult Deletar(Produto model)
        {

            return RedirectToAction("Lista");
        }
    }
}