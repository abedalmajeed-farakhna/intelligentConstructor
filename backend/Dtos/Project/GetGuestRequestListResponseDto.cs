using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Project
{
    public class GetGuestRequestListResponseDto
    {

        public int Id { get; set; }
        public Guid ToUserId { get; set; }
        public string ToFullName { get; set; }
        public string ToProfileImage { get; set; }
        public string RequestDescription { get; set; }
        public DateTime FromeDate { get; set; }
        public DateTime ToDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }

    }
}
