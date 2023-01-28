using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class GetProjectListDetails
    {
      
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public ProjectDetailsDto ProjectDetails { get; set; }

    }
}

