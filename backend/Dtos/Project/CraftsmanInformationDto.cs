using Backend.Enums;

namespace Backend.Dtos.Project
{
    public class CraftsmanInformationDto
    {
       
        public string UserName { get; set; }
        public string FullName { get; set; }
        public DateTime ExpectedStartDate { get; set; }
        public DateTime ExpectedEndDate { get; set; }
        public ProjectStatusEnum? projectStatus { get; set; }
    }
}
