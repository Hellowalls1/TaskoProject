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
    public class TeamController : ControllerBase
    {
        private readonly TeamRepository _teamRepository;
        private readonly UserProfileRepository _userProfileRepository;

        public TeamController(ApplicationDbContext context)
        {
            _teamRepository = new TeamRepository(context);
            _userProfileRepository = new UserProfileRepository(context);
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
            return Ok(_teamRepository.GetAll());
        }

        [HttpGet("id/{id}")]
        public IActionResult GetTeamById(int id)
        {
            return Ok(_teamRepository.GetTeamById(id));
        }
        
        [HttpPost]
        public IActionResult Post(Team team)
        {
            _teamRepository.Add(team);
                 return CreatedAtAction("Get", new { id = team.Id }, team);
        }

        //updates the team

        [HttpPut("{id}")]
        
        public IActionResult Put(int id, Team team)
        {
            if (id != team.Id)
            {
                return BadRequest();
            }

            _teamRepository.Update(team);
            return NoContent();
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            _teamRepository.Delete(id);
             return NoContent();
        }
            
    }
}
