using Backend.Enums;
namespace Backend.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificInterval
    {

        public Guid Id { get; set; }
        public SectorEnum Sector { get; set; }
        public string? Note { get; set; }
        public int? Speed { get; set; }
        public string? ProfileImage { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public DateTime ExpectedStartDate { get; set; }
        public DateTime ExpectedEndDate { get; set; }
        public int ExpectedTime { get; set; }
    }
}