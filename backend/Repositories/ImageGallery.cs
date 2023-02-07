using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class ImageGalleryRepository : IImageGalleryRepository
    {

        private ApplicationDbContext _context;
        public ImageGalleryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<GetImageListResponse>> GetImageGalleryList(Guid userId)
        {
            return await _context.imageGallery.Where(t => t.UserId == userId && t.IsDeleted == false).Select(t => new GetImageListResponse
            {
                ImageName = t.ImageName,
                Title = t.Title,
                Id= t.Id
            }).ToListAsync();
        }
        public async Task<bool> DeleteImage(int id)
        {
            var item =  await _context.imageGallery.FirstOrDefaultAsync(t => t.Id == id);
            if(item != null)
            {
                _context.imageGallery.Remove(item);
                _context.SaveChanges();

            }
            return true;
        }
       
        public async Task<bool> AddImageList(List<ImageGallery> data)
        {
            await _context.imageGallery.AddRangeAsync(data);


            _context.SaveChanges();

            return true;
        }

    }
}
