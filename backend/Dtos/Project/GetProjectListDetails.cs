using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class GetProjectListDetails
    {
      
        public int Id { get; set; }
        public string? ProjectName { get; set; }
        public string? ElectricianFullName { get; set; }
        public string? PlumberFullName { get; set; }
        public string? BuilderFullName { get; set; }
        public string? TilerFullName { get; set; }
        public string? HousPainterFullName { get; set; }
        public string? CarpenterFullName { get; set; }
        public List<CraftsmanScheduleWithUserDetailsSP> ProjectDetails { get; set; }

    }
}

