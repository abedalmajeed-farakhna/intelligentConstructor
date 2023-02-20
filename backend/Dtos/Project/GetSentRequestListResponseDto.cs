using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class GetSentRequestListResponseDto
    {

        public int Id { get; set; }
        public Guid? ToUserId { get; set; }
        public string? ToFullName { get; set; }
        public string? ToProfileImage { get; set; }
        public string? RequestDescription { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ProjectStatusEnum? RequestStatus { get; set; }
        public int? Rating { get; set; }


    }
}
