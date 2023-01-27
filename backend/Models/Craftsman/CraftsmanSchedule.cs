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
        public DateTime FromeDate { get; set; }
        public DateTime ToDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }
    }
}
