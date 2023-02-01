using Backend.Dtos;
namespace Backend.Repositories
{
    public interface IRatingRepository
    {
        Task<bool> AddOrUpdateRatingDetails(RatingDetailsRequest request);
    }
}
