using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskoProject.Data;

namespace TaskoProject.Repositories
{
    public class TaskRepository
    {
        private readonly ApplicationDbContext _context;

        public TaskRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Task> GetAll()
        {
            return _context.Task
                   .Include(t => t.UserProfile)
                   .Include(t => t.List)
                   .ToList();
        }

        public Task GetTaskById(int id)
        {
            return _context.Task
            .Include(t => t.UserProfile)
            .Include(t => t.List)
            .FirstOrDefault(t => t.Id == id);
        }


        public void Add(Task task)
        {
            _context.Add(task);
            _context.SaveChanges();
        }

        public void Update(Task task)
        {
            _context.Entry(task).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var list = GetTaskById(id);
            _context.Task.Remove(task);
            _context.SaveChanges();
        }
    }
}
