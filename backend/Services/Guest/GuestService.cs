using Backend.Dtos.Craftsman;
using Backend.Dtos.Guest;
using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Buffers.Text;
using System.Drawing;
using System.Drawing.Imaging;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;
using IAuthenticationService = Backend.Services.IAuthenticationService;

namespace WebApplication1.Services.Guest
{
    public class GuestService : IGuestService
    {
        private readonly ICraftsmanInformationRepository _craftsmanInformationRepository;
       
        private readonly IUserRepository _userRepository;
        private readonly IAuthenticationService _authenticationService;


        public GuestService(ICraftsmanInformationRepository craftsmanInformationRepository ,IUserRepository userRepository ,IAuthenticationService authenticationService)
        {
            _craftsmanInformationRepository = craftsmanInformationRepository;
            _userRepository = userRepository;
            _authenticationService = authenticationService;



        }
        

        public async Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation()
        {
            return await _craftsmanInformationRepository.getAllCraftsmanInformation();
        }

        public async Task<bool> UpdateInGuestformationAsync(UpdateGuestInformationRequest request)
        {

            var userId = _authenticationService.GetCurrentUserId();
            if (userId == null)
            {
                throw new Exception();
            }

            var updateUserInformationRequest = new UpdateUserInformationRequest
            {
                FullName = request.FullName,
                PhoneNumber = request.PhoneNumber
            };
            await _userRepository.updateUserInformation(userId, updateUserInformationRequest);
           

            return true;
        }

        public async Task<GetGuestInformationResponse> GetGuestInformation()
        {
            var userId= _authenticationService.GetCurrentUserId();
           var user = await _userRepository.GetUserProfile(userId);
            if(user == null)
            {
                throw new Exception();
            }
            return new GetGuestInformationResponse
            {
                FullName = user.FullName,
                ProfileImage = user.ProfileImage,
                UserName = user.UserName,
                PhoneNumber = user.PhoneNumber

            };
        }

    }
}