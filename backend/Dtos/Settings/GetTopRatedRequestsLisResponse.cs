using Backend.Enums;

namespace WebApplication1.Dtos.Settings
{
    public class GetTopRatedRequestsLisResponse
    {
        public int Id { get; set; }
        public string? RequestDescription { get; set; }
        public int? RateValue { get; set; }
        public ProjectStatusEnum? RequestStatus { get; set; }

    }
}
