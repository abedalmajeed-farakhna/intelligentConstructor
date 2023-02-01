using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using Microsoft.Identity.Client;
using Backend.Dtos.Constructor;
using Backend.Dtos.Project;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class RatingController : Controller
    {


        private readonly IRatingService _ratingService;

        [HttpPost]
        public async Task<bool> AddOrUpdateRatingDetails([FromBody] RatingDetailsRequest request)
        {
            return await _ratingService.AddOrUpdateRatingDetails(request);
        }

    }
}
