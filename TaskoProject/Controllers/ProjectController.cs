﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskoProject.Data;
using TaskoProject.Models;
using TaskoProject.Repositories;

namespace TaskoProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly TeamRepository _teamRepository;
        private readonly UserProfileRepository _userProfileRepository;
        private readonly ProjectRepository _projectRepository;

        public ProjectController(ApplicationDbContext context)
        {
            _teamRepository = new TeamRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
            _projectRepository = new ProjectRepository(context);
        }

        //getting the authorized user
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }


        [HttpGet]

        public IActionResult Get()
        {
            return Ok(_projectRepository.GetAll());
        }

        [HttpGet("id/{id}")]
        public IActionResult GetPojectById(int id)
        {
            return Ok(_projectRepository.GetProjectById(id));
        }

        [HttpPost]
        public IActionResult Post(Project project)
        {
            _projectRepository.Add(project);
            return CreatedAtAction("Get", new { id = project.Id }, project);
        }

        //updates the team

        [HttpPut("{id}")]

        public IActionResult Put(int id, Project project)
        {
            if (id != project.Id)
            {
                return BadRequest();
            }

           // var currentUser = GetCurrentUserProfile();
           // project.UserProfileId = currentUser.Id;
           
            _projectRepository.Update(project);
            return NoContent();
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            _projectRepository.Delete(id);
            return NoContent();
        }

    }
}
