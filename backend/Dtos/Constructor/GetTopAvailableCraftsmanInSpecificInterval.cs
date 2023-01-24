using Backend.Enums;

namespace Backend.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificInterval
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public SectorEnum Sector { get; set; }
        public string? Note { get; set; }
        public int? Speed { get; set; }
        public string ProfileImage { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }


    }
}
