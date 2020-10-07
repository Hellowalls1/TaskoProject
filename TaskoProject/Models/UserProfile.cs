using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskoProject.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }


        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(75)]
        public string Email { get; set; }


        [Required]
        [MaxLength(250)]
        public string JobTitle { get; set; }


        [Required]
        [MaxLength(1000)]
        public string AboutMe { get; set; }


        [Required]
        
        public int TeamId { get; set; }

        public Team Team { get; set; }


        [MaxLength(250)]
        public string Photo { get; set; }

    }
}
