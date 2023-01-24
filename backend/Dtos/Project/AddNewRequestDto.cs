using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class AddNewRequestDto
    {
       
        public Guid FromUserId { get; set; }
        public Guid ToUserId { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Description { get; set; }






    }
}
