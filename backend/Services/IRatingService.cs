using Backend.Dtos;
using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public interface IRatingService
    {

        Task<bool> AddOrUpdateRatingDetails(RatingDetailsRequest request);
       
    }
}