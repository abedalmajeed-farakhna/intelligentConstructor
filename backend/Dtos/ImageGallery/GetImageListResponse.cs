using WebApplication1.Models;

namespace WebApplication1.Dtos.ImageGallery
{
    public class GetImageListResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<ImageGalleryModel> imageList { get; set; }

    }
}
