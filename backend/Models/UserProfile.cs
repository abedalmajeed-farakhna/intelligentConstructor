using Backend.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class UserProfile : IdentityUser
    {
        public string? ProfileImage { get; set; }
        public string? FullName { get; set; }

        [Required]
        public userTypeEnum UserType { get; set; }

    }
}