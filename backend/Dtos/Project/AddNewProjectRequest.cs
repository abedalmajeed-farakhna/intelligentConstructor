using Backend.Dtos.Constructor;
using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class AddNewProjectRequest
    {
       
        public string ProjectName { get; set; }
        public int Space { get; set; }
        public DateTime StartDate { get; set; }
        public CraftsmanDataDto Builder { get; set; }
       public CraftsmanDataDto Tiler { get; set; }
        public CraftsmanDataDto HousePainter { get; set; }
        public CraftsmanDataDto Carpenter { get; set; }
       








    }
}
