using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Guest
{
    public class GetGuestInformationResponse
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string? ProfileImage { get; set; }

    }
}
