using Backend.Enums;

namespace WebApplication1.Models.Craftsman
{
    public class CraftsmanSchedule
    {
        public int Id { get; set; }
        public Guid FromUserId { get; set; }
        public Guid ToUserId { get; set; }
        public int? ProjectId { get; set; }
        public string RequestDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }
    }
}
