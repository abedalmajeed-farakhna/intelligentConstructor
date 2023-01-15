using Backend.Enums;

namespace WebApplication1.Models.Craftsman
{
    public class CraftsmanSchedule
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public Guid UserId { get; set; }
        public DateTime Frome { get; set; }
        public DateTime To { get; set; }
        public ProjectStatusEnum Status { get; set; }



    }
}
