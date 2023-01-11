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

        public SectorEnum? Sector { get; set; }

        public int? Speed { get; set; }

        public string? Note { get; set; }
    }
}
