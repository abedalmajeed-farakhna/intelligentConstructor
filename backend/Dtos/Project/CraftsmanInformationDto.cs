using Backend.Enums;

namespace Backend.Dtos.Project
{
    public class CraftsmanInformationDto
    {
       
        public string UserName { get; set; }
        public string? FullName { get; set; }
        public DateTime? ExpectedStartDate { get; set; }
        public DateTime? ExpectedEndDate { get; set; }
        public ProjectStatusEnum? projectStatus { get; set; }
        public SectorEnum? Sector { get; set; }
        public int? RatingValue { get; set; }
        public int RequestId { get; set; }
        public Guid UserId { get; set; }
    }
}
