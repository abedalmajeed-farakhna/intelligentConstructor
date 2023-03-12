using Backend.Dtos;
using Backend.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;

namespace Backend.Services
{
    public class RatingService : IRatingService
    {
        private readonly IRatingRepository _ratingRepository;


        //private readonly UserManager<User> _userManager;
        public RatingService(IRatingRepository ratingRepository)
        {

            _ratingRepository = ratingRepository;
        }
        
        public async Task<bool> AddOrUpdateRatingDetails(RatingDetailsRequest request)
        {
           await  _ratingRepository.AddOrUpdateRatingDetails(request);
            return true;
        }



    }
}
