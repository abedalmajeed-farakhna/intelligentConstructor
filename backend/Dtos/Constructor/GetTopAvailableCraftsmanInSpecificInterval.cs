using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificInterval
    {
        public string UserId { get; set; }
        public string? Sector { get; set; }
        public string? Note { get; set; }
        public int? Sped { get; set; }


    }
}
