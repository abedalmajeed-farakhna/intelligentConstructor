using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using WebApplication1.Dtos.Settings;
using Backend.Enums;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class UserSettingsController : Controller
    {
        private readonly IUserService _userService;
        private readonly ICraftsmanService _craftsmanService;
        private readonly ICraftsmanScheduleService _craftsmanScheduleService;

        public UserSettingsController(IUserService userService, ICraftsmanService craftsmanService, ICraftsmanScheduleService craftsmanScheduleService)
        {
            _userService = userService;
            _craftsmanService = craftsmanService;
            _craftsmanScheduleService = craftsmanScheduleService;
        }

        [HttpPost]
        public async Task<bool> UpdateProfileImage([FromBody] UpdateProfileImageRequest request)
        {
            return await _userService.UpdateProfileImageAsync(request);
        }


        [HttpGet]
        public async Task<List<GetLastRequestsResponse>> GetLastRequestsList()
        {
            return await _craftsmanScheduleService.GetLastRecivedRequestsList();
        }
        [HttpGet]
        public async Task<List<GetTopRatedRequestsLisResponse>> GetTopRatedRequestsList()
        {
            return await _craftsmanScheduleService.GetTopRatedRequestsList();
        }

        [HttpGet]
        public async Task<int> GetNumberOfRecivedRequest(ProjectStatusEnum? projectStatus)
        {
            return await _craftsmanScheduleService.GetNumberOfRecivedRequest(projectStatus);
        }

        [HttpGet]
        public async Task<int> GetNumberOfSentRequest(ProjectStatusEnum? projectStatus)
        {
            return await _craftsmanScheduleService.GetNumberOfSentRequest(projectStatus);
        }
    }
}