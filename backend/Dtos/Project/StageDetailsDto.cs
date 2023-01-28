using Backend.Enums;

namespace Backend.Dtos.Project
{
    public class StageDetailsDto
    {
      
        public DateTime? StartDate { get; set; }
        public ProjectStatusEnum? projectStatus { get; set; }

    }
}
