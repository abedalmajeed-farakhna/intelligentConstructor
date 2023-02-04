using Backend.Dtos;
using Backend.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using WebApplication1.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

            if (IsAuthenticated())
            {
                throw new Exception("User is Already Logged in");
            }

            var signIn = await _signInManager.PasswordSignInAsync(request.Username,request.Password,true,true);
          
            var user = await _userManager.FindByNameAsync(request.Username);

            if(user == null)
            {
                throw new Exception();
            }
            if (signIn != null)
            {
                if (signIn.Succeeded)
                {
                    return new LoginResponse
                    {
                        isAuthontecated = true,
                        FullName = user.FullName,
                        UserType = user.UserType,
                        ProfileImage = user.ProfileImage
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
                Email = request.Username,
                UserName = request.Username,
                FullName = request.FullName,
                EmailConfirmed = true,
                UserType = request.UserType,
                PhoneNumber = request.PhoneNumber
            };

            var createUser = await _userManager.CreateAsync(user, request.Password);
            if (createUser.Errors.Any())
            {
                throw new Exception(createUser.Errors.FirstOrDefault().Description);
            }
            return createUser.Succeeded;
        }

        public async Task<bool> SignOutAsync()
        {
            await _signInManager.SignOutAsync();
            return true;
        }

        public Guid? GetCurrentUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
            {
                throw new Exception("unauthorize");
            }
            Guid.TryParse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier), out var ID);
            return ID;

        }

        private bool IsAuthenticated()
        {
            var userIdentity = _httpContextAccessor.HttpContext?.User.Identity;
            if (userIdentity == null)
            {
                return false;
            }
            return userIdentity.IsAuthenticated;
        }
    }
}
