using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Craftsman
{
    public class GetGuestInformationResponse
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string? ProfileImage { get; set; }

    }
}
