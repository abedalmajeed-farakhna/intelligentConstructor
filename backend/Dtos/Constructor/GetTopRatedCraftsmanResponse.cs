using Backend.Enums;

namespace WebApplication1.Dtos.Constructor
{
    public class GetTopRatedCraftsmanResponse
    {

        public Guid Id { get; set; }
        public SectorEnum Sector { get; set; }
        public string? Note { get; set; }
        public int? Speed { get; set; }
        public string? ProfileImage { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public int? RatingValue { get; set; }
        public int? RegionId { get; set; }
        public string? RegionName { get; set; }
    }
}
