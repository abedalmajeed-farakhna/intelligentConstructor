using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IImageGalleryRepository
    {
        Task<bool> AddImageList(List<ImageGallery> data);
        Task<List<GetImageListResponse>> GetImageGalleryList(Guid userId);
        Task<bool> DeleteImage(int id);
    }
}
