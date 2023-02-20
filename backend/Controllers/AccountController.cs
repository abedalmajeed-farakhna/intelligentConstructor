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
        public async Task<ActionResult<LoginResponse>> Login([FromBody] LoginRequest request)
        {
            try
            {
                return await _authenticationService.LoginAsync(request);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
        }

        //[Authorize]
        [HttpPost]
        public async Task<ActionResult<bool>> SignUp([FromBody] SignUpRequest request)
        {
          
            try
            {
                return await _authenticationService.SignUpAsync(request);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> SignOut()
        {
            return await _authenticationService.SignOutAsync();
        }
    }
}
