using Backend.Repositories;
using Microsoft.AspNetCore.Identity;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;

namespace Backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUploadService _uploadService;
        private readonly IUserRepository _userRepository;
        private readonly IAuthenticationService _authenticationService;
        private readonly UserManager<UserProfile> _userManager;
        public UserService(IUploadService uploadService, IUserRepository userRepository, IAuthenticationService authenticationService, UserManager<UserProfile> userManager)
        {
            _uploadService = uploadService;
            _userRepository = userRepository;
            _authenticationService = authenticationService;
            _userManager = userManager;
        }

        public async Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request)
        {

            var filename = await _uploadService.SaveImageAsync(request.Image, "./Upload");

            var userId = _authenticationService.GetCurrentUserId();

            var user = await _userRepository.GetUserProfile(userId.GetValueOrDefault());
            if(user == null)
            {
                throw new Exception("user is null");
            }
            user.ProfileImage = filename;
            await _userManager.UpdateAsync(user);
            return true;
        }
    }
}