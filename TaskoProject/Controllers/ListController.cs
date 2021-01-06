using System;
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
    public class ListController : ControllerBase
    {
        private readonly TeamRepository _teamRepository;
        private readonly UserProfileRepository _userProfileRepository;
        private readonly ProjectRepository _projectRepository;
        private readonly ListRepository _listRepository;
        public ListController(ApplicationDbContext context)
        {
            _teamRepository = new TeamRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
            _projectRepository = new ProjectRepository(context);
            _listRepository = new ListRepository(context);
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
            return Ok(_listRepository.GetAll());
        }

        [HttpGet("getlistbyprojectid/{id}")]

        public IActionResult GetListByProjectId(int id)
        {
            return Ok(_listRepository.GetListByProjectId(id));
        }
            
       [HttpGet("id/{id}")]
        public IActionResult GetListById(int id)
        {
            return Ok(_listRepository.GetListById(id));
        }

        [HttpPost]
        public IActionResult Post(List list)
        {
            _listRepository.Add(list);
            return CreatedAtAction("Get", new { id = list.Id }, list);
        }

        //updates the team

        [HttpPut("{id}")]

        public IActionResult Put(int id, List list)
        {
            if (id != list.Id)
            {
                return BadRequest();
            }

            // var currentUser = GetCurrentUserProfile();
            // project.UserProfileId = currentUser.Id;

            _listRepository.Update(list);
            return NoContent();
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            _listRepository.Delete(id);
            return NoContent();
        }

    }
}

