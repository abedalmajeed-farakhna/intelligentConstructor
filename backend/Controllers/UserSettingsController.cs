using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using WebApplication1.Dtos.Settings;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class UserSettingsController : Controller
    {
        private readonly IUserService _userService;
        private readonly ICraftsmanService _craftsmanService;

        public UserSettingsController(IUserService userService, ICraftsmanService craftsmanService)
        {
            _userService = userService;
            _craftsmanService = craftsmanService;
        }

        [HttpPost]
        public async Task<bool> UpdateProfileImage([FromBody] UpdateProfileImageRequest request)
        {
            var asd = await _craftsmanService.getAllCraftsmanInformation();
            return await _userService.UpdateProfileImageAsync(request);
        }
    }
}