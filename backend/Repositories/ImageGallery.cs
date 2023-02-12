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

        public async Task<List<GetImageListResponse>> GetImageGalleryList(Guid userId, int? requestId)
        {
            var list = await _context.imageGalleryGroup.Where(t => t.userId == userId).ToListAsync();
            if (requestId != null && requestId > 0)
            {
                list = list.Where(t=>t.RequestId== requestId).ToList();
            }
            var listGroupId = list.Select(t => t.Id);
            var result = new List<GetImageListResponse>();
            var allImages = await _context.imageGallery.Where(t=>listGroupId.Contains(t.ImageGalleryGroupId)).ToListAsync();
            
            foreach (var imageGalleryGroup in list)
            {
                result.Add(new GetImageListResponse
                {
                    imageList = allImages.Where(t => t.ImageGalleryGroupId == imageGalleryGroup.Id).ToList(),
                    Title = imageGalleryGroup.GroupTitle,
                    Id = imageGalleryGroup.Id,
                });
            }
            return result;
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

        public async Task<bool> DeleteSection(int id)
        {
            var list = await _context.imageGallery.Where(t => t.ImageGalleryGroupId == id).ToListAsync();
            if (list != null)
            {
                _context.imageGallery.RemoveRange(list);
                _context.SaveChanges();

            }
            var item = await _context.imageGalleryGroup.FirstOrDefaultAsync(t => t.Id == id);
            if (item != null)
            {
                _context.imageGalleryGroup.Remove(item);
                _context.SaveChanges();

            }
            return true;
        }
        public async Task<bool> AddImageList(List<ImageGalleryModel> data)
        {
            await _context.imageGallery.AddRangeAsync(data);


            _context.SaveChanges();

            return true;
        }
        public async Task<int> AddImageGalleryGroup(ImageGalleryGroup data)
        {
            await _context.imageGalleryGroup.AddAsync(data);
            _context.SaveChanges();

            return data.Id;
        }


    }
}
