using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IImageGalleryRepository
    {
        Task<bool> AddImageList(List<ImageGalleryModel> data);
        Task<bool> DeleteImage(int id);
        Task<bool> DeleteSection(int id);
        Task<int> AddImageGalleryGroup(ImageGalleryGroup data);
        Task<List<GetImageListResponse>> GetImageGalleryList(Guid userId, int? requestId);
    }
}
