using Backend.Enums;

namespace Backend.Dtos.Project
{
    public class GetReceivedRequestListSP
    {

        public int Id { get; set; }
        public Guid FromUserId { get; set; }
        public string FromFullName { get; set; }
        public string? FromProfileImage { get; set; }
        public string? RequestDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }
        public int? Rating { get; set; }
    }
}
