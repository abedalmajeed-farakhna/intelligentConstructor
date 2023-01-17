using Backend.Enums;

namespace WebApplication1.Models.Craftsman
{
    public class CraftsmanSchedule
    {
        public int Id { get; set; }
        public Guid FromUserId { get; set; }
        public Guid ToUserId { get; set; }
        public Guid Description { get; set; }
        public DateTime Frome { get; set; }
        public DateTime To { get; set; }
        public ProjectStatusEnum Status { get; set; }
    }
}
