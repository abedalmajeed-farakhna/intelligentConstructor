using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Craftsman
{
    public class GetUserInformationResponse
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Note { get; set; }
        public int? Speed { get; set; }
        public SectorEnum? Sector { get; set; }
        public string? ProfileImage { get; set; }

        public int? Region { get; set; }


    }
}
