using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class AccountController : Controller
    {

        private readonly IAuthenticationService _authenticationService;



        public AccountController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        public IActionResult Index()
        {
            return Ok();
        }

        [HttpPost]
        public async Task<LoginResponse> Login([FromBody] LoginRequest request)
        {
            return await _authenticationService.LoginAsync(request);
        }

        //[Authorize]
        [HttpPost]
        public async Task<bool> SignUp([FromBody] SignUpRequest request)
        {
            return await _authenticationService.SignUpAsync(request);
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> SignOut()
        {
            return await _authenticationService.SignOutAsync();
        }
    }
}
