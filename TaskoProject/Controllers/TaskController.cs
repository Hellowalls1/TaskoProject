using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskoProject.Data;
using TaskoProject.Models;
using TaskoProject.Repositories;

namespace TaskoProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TeamRepository _teamRepository;
        private readonly UserProfileRepository _userProfileRepository;
        private readonly ProjectRepository _projectRepository;
        private readonly ListRepository _listRepository;
        private readonly TaskRepository _taskRepository;
        public TaskController(ApplicationDbContext context)
        {
            _teamRepository = new TeamRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
            _projectRepository = new ProjectRepository(context);
            _listRepository = new ListRepository(context);
            _taskRepository = new TaskRepository(context);
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
            return Ok(_taskRepository.GetAll());
        }
        //gets all tasks by id
        [HttpGet("id/{id}")]
        public IActionResult GetTasktById(int id)
        {
            return Ok(_taskRepository.GetTaskById(id));
        }

        [HttpPost]
        public IActionResult Post(Task task)
        {
            _taskRepository.Add(task);
            return CreatedAtAction("Get", new { id = task.Id }, task);
        }

        //updates the team

        [HttpPut("{id}")]

        public IActionResult Put(int id, Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            // var currentUser = GetCurrentUserProfile();
            // project.UserProfileId = currentUser.Id;

            _taskRepository.Update(task);
            return NoContent();
        }

        [HttpDelete("{id}")]
            //delete by id
        public IActionResult Delete(int id)
        {
            _taskRepository.Delete(id);
            return NoContent();
        }

    }
}
