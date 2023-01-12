using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Craftsman
{
    public class UpdateGuestInformationRequest
    {
        [Required]
        public string FullName { get; set; }
        

    }
}
