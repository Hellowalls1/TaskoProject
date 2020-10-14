using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskoProject.Models;

namespace TaskoProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<List> List { get; set; }
        public DbSet<Team> Team { get; set; }
        public DbSet<Task> Task { get; set; }
        public DbSet<Project> Project { get; set; }

 
    }
}
