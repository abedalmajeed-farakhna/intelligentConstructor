using Backend.Dtos;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IRatingRepository
    {
        Task<bool> AddOrUpdateRatingDetails(RatingDetailsRequest request);
        Task<List<Rating>> GetRatingValue();
    }
}
