using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskoProject.Data;
using TaskoProject.Models;

namespace TaskoProject.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .Include(i => i.TeamId)
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public UserProfile GetUserProfileById(int id)
        {
            return _context.UserProfile

                .FirstOrDefault(up => up.Id == id);
                
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

    }
}
