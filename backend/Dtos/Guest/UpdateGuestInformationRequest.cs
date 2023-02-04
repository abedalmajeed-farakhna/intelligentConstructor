using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Guest
{
    public class UpdateGuestInformationRequest
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public string PhoneNumber { get; set; }


    }
}
