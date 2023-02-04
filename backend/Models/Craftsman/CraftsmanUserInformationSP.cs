using Backend.Enums;

namespace WebApplication1.Models.Craftsman
{
    public class CraftsmanUserInformationSP
    {
        public string Id { get; set; }
        public string? Email { get; set; }
        public string? UserName { get; set; }
        public string? FullName { get; set; }
        public string? ProfileImage { get; set; }
        public int? RegionId { get; set; }
        public string? RegionName { get; set; }

        public SectorEnum? Sector { get; set; }

        public int? Speed { get; set; }
        public int? RatingValue { get; set; }

        public string? Note { get; set; }

        public static implicit operator string(CraftsmanUserInformationSP v)
        {
            throw new NotImplementedException();
        }
    }
}
