using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class SendRequestDto
    {
        
        public Guid ToUserId { get; set; }

        public DateTime From { get; set; }
        public DateTime? ExpectedEndDate { get; set; }
        public string? Description { get; set; }
        public int? ProjectId { get; set; }


    }
}
