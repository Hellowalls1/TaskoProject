using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskoProject.Models
{
    public class List
    {
        public int Id { get; set; }

        [Required]

        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }


        [Required]

        public int ProjectId { get; set; }

        public Project Project { get; set; }

        [Required]
        [StringLength(150)]

        public string Name { get; set; }

        [Required]
        [StringLength(2000)]

        public string Description { get; set; }

        [Required]

        public DateTime DateCreated { get; set; }

        //? allowing null value (no [Required] because it is not)
        public DateTime? DueDate { get; set; }
    }
}
