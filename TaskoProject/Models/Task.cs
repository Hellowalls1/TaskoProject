using Microsoft.AspNetCore.SignalR;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskoProject.Models
{
    public class Task
    {
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }
        
        //need to have the primary key for CreatorId and 
        public UserProfile UserProfile { get; set; }


        [Required]
       
        public int ListId { get; set; }

        //primary key for list id
        public List List { get; set; }

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
