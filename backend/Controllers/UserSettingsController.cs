using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using WebApplication1.Dtos.Settings;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class UserSettingsController : Controller
    {


        private readonly IUploadService _uploadService;


        public UserSettingsController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }

        [HttpPost]
        public async Task<bool> UpdateProfileImage([FromBody] UpdateProfileImageRequest request)
        {
            _uploadService.SaveImage(request.Image, "./Upload");

            return true;
        }
    }
}