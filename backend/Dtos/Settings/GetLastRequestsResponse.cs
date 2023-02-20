using Backend.Enums;

namespace WebApplication1.Dtos.Settings
{
    public class GetLastRequestsResponse
    {
        public int Id { get; set; }
        public string? RequestDescription { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }
    }
}
