using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskoProject.Data;
using TaskoProject.Models;

namespace TaskoProject.Repositories
{
    public class TeamRepository
    {
        private readonly ApplicationDbContext _context;

        public TeamRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Team> GetAll()
        {
            return _context.Team

                .OrderBy(t => t.Name)
                .ToList();
        }

        public  Team GetTeamById(int id)
        {
            return _context.Team.FirstOrDefault(t => t.Id == id);
        }
    }
}
