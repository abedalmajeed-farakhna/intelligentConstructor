using System.ComponentModel.DataAnnotations;
using Backend.Enums;

namespace Backend.Dtos
{
    public class SignUpRequest
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }

        [Required]
        public string FullName { get; set; }
        [Required]
        public userTypeEnum UserType { get; set; }

    }
}
