using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public abstract class BaseRepository<T> where T : BaseModel
    {
        private static List<T> list = new List<T>();

        public virtual void Create(T model)
        {
            list.Add(model);
        }

        public virtual List<T> Read()
        {
            return list;
        }
        public virtual T Read(int id)
        {
            return list.Find(m => m.Id == id);
        }

        public virtual void Update(T model)
        {
            var index = list.FindIndex(m => m.Id == model.Id);
            list[index] = model;
        }

        public virtual void Delete(int id)
        {
            T model = Read(id);
            list.Remove(model);

        }
    }
}