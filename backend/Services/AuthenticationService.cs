using Backend.Dtos;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using WebApplication1.Models;

namespace Backend.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IUserRepository _userRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly SignInManager<UserProfile> _signInManager;
        UserManager<UserProfile> _userManager;

        //private readonly UserManager<User> _userManager;
        public AuthenticationService(IUserRepository userRepository,IHttpContextAccessor httpContextAccessor,
           SignInManager<UserProfile> signInManager, UserManager<UserProfile> userManager)
        {
            _userRepository = userRepository;
            _httpContextAccessor = httpContextAccessor;
            _signInManager = signInManager;

            _userManager= userManager;

        }
        public async Task<LoginResponse> LoginAsync(LoginRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException();
            }

            if (_httpContextAccessor.HttpContext.User.Identity.IsAuthenticated)
            {
                throw new Exception("User is Already Logged in");
            }

            var asd = await _signInManager.PasswordSignInAsync(request.Username,request.Password,true,true);
          
            var user = await _userManager.FindByNameAsync(request.Username);

            if (asd != null)
            {
                if (asd.Succeeded)
                {
                    return new LoginResponse
                    {
                        isAuthontecated = true,
                        FullName = "Abed Test",
                        userType = user.UserType
                    };
                }
            }

            return new LoginResponse { isAuthontecated = false };
        }
        public async Task<bool> SignUpAsync(SignUpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException();
            }

            var user = new UserProfile
            {
                UserName = request.Username,
                EmailConfirmed = true,
                UserType = request.UserType
            };

            await _userManager.CreateAsync(user, request.Password);

            return true;
            //return await _userRepository.SignUpAsync(request);
        }
        public async Task<bool> SignOutAsync()
        {
            await _signInManager.SignOutAsync();
            //_httpContextAccessor.HttpContext.Request.HttpContext.Session.Clear();
            return true;
        }
        /*
        private Task<User> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(_httpContextAccessor.HttpContext.User);
        }*/

        public Guid? GetCurrentUserId()
        {
            //var asd = GetCurrentUserAsync();
            if (_httpContextAccessor.HttpContext == null)
            {
                return null;
            }
            Guid.TryParse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier), out var ID);
            return ID;

        }
    }
}
