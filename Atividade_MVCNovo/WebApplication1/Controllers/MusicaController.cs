using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class MusicaController : Controller
    {
    MusicaRepository repository = new MusicaRepository();
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Musica model)
        {
            repository.Create(model);
            ModelState.Clear();
            return View();
        }
        [HttpGet]
        public ActionResult List()
        {
            return View(repository.Read());
        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            Musica model = repository.Read(id);
            return View(model);
        }
        [HttpPost]
        public ActionResult Edit(Musica model)
        {
            repository.Update(model);
            return RedirectToAction("List");
        }
        [HttpGet]
        public ActionResult Details(int id)
        {
            return View(repository.Read(id));
        }

        public ActionResult Delete(int id)
        {
            repository.Delete(id);
            return RedirectToAction("List");
        }

    }
}