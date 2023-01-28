namespace Backend.Dtos.Project
{
    public class ProjectDetailsDto
    {
      
        public StageDetailsDto BuilderStage { get; set; }
        public StageDetailsDto TilerStage { get; set; }
        public StageDetailsDto CarpenterStage { get; set; }
        public StageDetailsDto HousePainterStage { get; set; }

    }
}
