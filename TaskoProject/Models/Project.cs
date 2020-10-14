using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskoProject.Models
{
    public class Project
    {
        //NOTE: could potentially use class inheritance or an interface for properties: Project, list, task
        public int Id { get; set; }

       [Required]
     
        public int UserProfileId { get; set; }

        public UserProfile  UserProfile { get; set; }


        [Required]
       
        public int TeamId { get; set; }

        public Team Team { get; set; }

        [Required]
        [StringLength(150)]

        public string Name { get; set; }

        [Required]
        [StringLength(2000)]

        public string Description { get; set; }

        [Required]

        public DateTime DateCreated { get; set; }

    

        public DateTime? DueDate { get; set; }

    }
}
