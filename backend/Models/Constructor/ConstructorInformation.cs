using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Constructor
{
    public class ConstructorInformation
    {

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public int Capacity { get; set; }

        public string Note { get; set; }

    }
}