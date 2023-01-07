using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Backend.Services;
using Microsoft.EntityFrameworkCore.Storage;
using WebApplication1.Dtos.Craftsman.Settings;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class SettingsControllers : Controller
    {

        private readonly IUploadService _uploadService;
        


        public SettingsControllers(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }


        [HttpPost]
        public async Task<bool> Test()
        {



            return true;
            // check database
            // return View();
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> UpdateProfileImage()

        {
            var request = new UpdateProfileImageRequest
            {
                Image = "test"
            };

            return await _uploadService.UpdateProfileImageAsync(request);

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
