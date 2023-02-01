using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class RatingRepository : IRatingRepository
    {

        private ApplicationDbContext _context;
        public RatingRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<bool> AddOrUpdateRatingDetails(RatingDetailsRequest request)
        {

            var item = await _context.Rating.FirstOrDefaultAsync(t => t.RequestId == request.RequestID);
            if (item == null)
            {
                item = new Rating
                {
                    RequestId = request.RequestID,
                    RateValue = request.RateVslue
                };
                await _context.Rating.AddAsync(item);
            }
            else
            {
                item.RateValue = request.RateVslue;
            }

            _context.SaveChanges();

            return true;
        }

    }
}
