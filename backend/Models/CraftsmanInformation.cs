using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class CraftsmanInformation 
    {

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public userTypeEnum CraftsManType { get; set; }

        [Required]
        public int Speed { get; set; }

        [Required]
        public string Note { get; set; }

    }
}