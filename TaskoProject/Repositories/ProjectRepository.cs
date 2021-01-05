using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskoProject.Data;
using TaskoProject.Models;

namespace TaskoProject.Repositories
{
    public class ProjectRepository
    {
        private readonly ApplicationDbContext _context;

        public ProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        //getting all projects
        public List<Project> GetAll()
        {
            return _context.Project
                   .Include(p => p.UserProfile)
                   .Include(p => p.Team)
                   .ToList();
        }
    //getting projects by id
        public Project GetProjectById(int id)
        {
            return _context.Project
            .Include(p => p.UserProfile)
            .Include(p => p.Team)
            .FirstOrDefault(p => p.Id == id);
        }

        //getting all projects by firebase id needs team?
        public List<Project> GetByFirebaseUserId(string id)
        {
            return _context.Project.Include(p => p.UserProfile)
                .Include(p => p.Team)
                .Where(u => u.UserProfile.FirebaseUserId == id)
                .ToList();
        }
      
        public void Add(Project project)
        {
            _context.Add(project);
            _context.SaveChanges();
        }

        public void Update(Project project)
        {
            _context.Entry(project).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var project = GetProjectById(id);
            _context.Project.Remove(project);
            _context.SaveChanges();
        }
        
    }
}
