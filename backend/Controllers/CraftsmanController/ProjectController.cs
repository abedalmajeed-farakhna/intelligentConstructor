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


        private readonly ICraftsmanService _craftsmanService;


        public ProjectController(ICraftsmanService craftsmanService)
        {
            _craftsmanService = craftsmanService;

        }

        [HttpGet]
        public async Task<GetUserInformationResponse> sendRequest()
        {
            return await _craftsmanService.GetUserInformation();
        }
       
    }
}
