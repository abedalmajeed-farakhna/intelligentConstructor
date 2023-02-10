using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Constructor
{
    public class Project
    {
        public int ProjectId { get; set; }
        [Required]
        public string ProjectName { get; set; }
        [Required]
        public Guid UserId { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public int Space { get; set; }
        public int RegionId { get; set; }

    }
}