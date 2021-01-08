using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskoProject.Data;
using TaskoProject.Models;

namespace TaskoProject.Repositories
{
    public class ListRepository
    {
        private readonly ApplicationDbContext _context;

        public ListRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<List> GetAll()
        {
            return _context.List
                   .Include(p => p.UserProfile)
                   .Include(p => p.Project)
                   .ToList();
        }

        public List GetListById(int id)
        {
            return _context.List
            .Include(p => p.UserProfile)
            .Include(p => p.Project)
            .FirstOrDefault(t => t.Id == id);
        }

        public List<List> GetListsByProjectId(int id)
        {
            return _context.List
                .Include(p => p.Project)
                .Include(p => p.UserProfile)
                .Where(p => p.ProjectId == id)
                .ToList();

        }


        public void Add(List list)
        {
            _context.Add(list);
            _context.SaveChanges();
        }

        public void Update(List list)
        {
            _context.Entry(list).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var list = GetListById(id);
            _context.List.Remove(list);
            _context.SaveChanges();
        }
    }
}
