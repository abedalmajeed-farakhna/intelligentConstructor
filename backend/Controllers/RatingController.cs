using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class RatingController : Controller
    {

        private readonly IRatingService _ratingService;

        public RatingController(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }

        [HttpPost]
        public async Task<bool> AddOrUpdateRatingDetails([FromBody] RatingDetailsRequest request)
        {
            return await _ratingService.AddOrUpdateRatingDetails(request);
        }
    }
}
