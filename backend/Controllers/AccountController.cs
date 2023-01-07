using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using WebApplication1.Dtos.Craftsman.Settings;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class AccountController : Controller
    {

        private readonly IAuthenticationService _authenticationService;

        private readonly IUploadService _uploadService;


        public AccountController(IAuthenticationService authenticationService, IUploadService   uploadService)
        {
            _authenticationService = authenticationService;
            _uploadService = uploadService;
        }
       
        [HttpPost]
        public async Task<LoginResponse> Login([FromBody] LoginRequest request )
        {



            return await _authenticationService.LoginAsync(request);
            
            // check database
            // return View();
        }

        //[Authorize]
        [HttpPost]
        public async Task<bool> SignUp( [FromBody]SignUpRequest request)
        {


            return await _authenticationService.SignUpAsync(request);

            // check database
            // return View();
        }

       // [Authorize]
        [HttpPost]
        public async Task<bool> SignOut()
        {


            return await _authenticationService.SignOutAsync();

            // check database
            // return View();
        }


        [HttpPost]
        public async Task<bool> UpdateProfileImage([FromBody]UpdateProfileImageRequest request)

        {
            /*var request = new UpdateProfileImageRequest
            {
                Image = "test"
            };*/

              _uploadService.SaveImage(request.Image, "./Upload");

            return true;
//            return await _uploadService.UpdateProfileImageAsync(request);

            // check database
            // return View();
        }
        /*
        [Authorize]
        [HttpPost]
        public  bool TestSanaa()
        {


            _authenticationService.GetCurrentUserId();
            return true;
            // check database
            // return View();
        }*/
    }
}
