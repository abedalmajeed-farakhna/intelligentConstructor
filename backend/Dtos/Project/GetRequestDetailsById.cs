using Backend.Enums;
using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Models;

namespace Backend.Dtos.Project
{
    public class GetRequestDetailsById
    {

        public int Id { get; set; }
        public Guid ToUserId { get; set; }
        public string ToUserName{ get; set; }
        public int? ProjectId { get; set; }
        public string? ProjectName { get; set; }
        public string RequestDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }

        public List<GetImageListResponse> ImageGalleryList { get; set; }
    }
}
