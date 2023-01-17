using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class ProjectController : Controller
    {


        private readonly ICraftsmanScheduleService _craftsmanScheduleService;


        public ProjectController(ICraftsmanScheduleService craftsmanScheduleService)
        {
            _craftsmanScheduleService = craftsmanScheduleService;

        }

        [HttpPost]
        public async Task<bool> SendRequest([FromBody] SendRequestDto request )
        {
             return await _craftsmanScheduleService.SendRequest(request);
        }
        public async Task<bool> AcceptRequest ([FromBody] AcceptRequestDto request)
        {
            return await _craftsmanScheduleService.AcceptRequest(request.projectId);
        }
        public async Task<bool> RejectRequest([FromBody] RejectRequestDto request)
        {
            return await _craftsmanScheduleService.RejectRequest(request.projectId);
        }

    }
}
