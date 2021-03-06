﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskoProject.Data;
using TaskoProject.Models;

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

        //getting the tasks by the list they are on
        //used in the task list
        //includes user information so that the task can have a user
        public List<Task> GetTasksByListId(int id)
        {
            return _context.Task
                .Include(t => t.UserProfile)
                .Include(t => t.List)
                .Where(t => t.ListId == id)
                .ToList();
        }

        //for getting an individual task 
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
            var task = GetTaskById(id);
            _context.Task.Remove(task);
            _context.SaveChanges();
        }
    }
}
