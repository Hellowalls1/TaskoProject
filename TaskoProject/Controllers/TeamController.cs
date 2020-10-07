using System;
using System.Collections.Generic;
using System.Linq;
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
        public TeamController(ApplicationDbContext context)
        {
            _teamRepository = new TeamRepository(context);
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
    }
}
