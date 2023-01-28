using Microsoft.AspNetCore.Mvc;

using Backend.Services;
using Backend.Dtos.Constructor;
using WebApplication1.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Constructor;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class ConstructorController : Controller
    {


        private readonly IConstructorService _constructorService;
        private readonly ICraftsmanScheduleService _craftsmanScheduleService;



        public ConstructorController(IConstructorService constructorService, ICraftsmanScheduleService craftsmanScheduleService)
        {
            _constructorService = constructorService;
            _craftsmanScheduleService = craftsmanScheduleService;
        }

        [HttpGet]
        public async Task<GetConstructorInformationResponse> GetConstructorInformation()
        {
            return await _constructorService.GetConstructorInformation();
        }

        [HttpGet]
        public async Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request)
        {
           
            return await _craftsmanScheduleService.GetTopAvailableCraftsmanInSpecificInterval(request);
        }




        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody] Dtos.Constructor.UpdateInformationRequest request)
        {
            return await _constructorService.UpdateInformationAsync(request);
        }

        [HttpPost]
        public async Task<bool> AddNewProject([FromBody] AddNewProjectRequest request)
        {
            return await _constructorService.AddNewProject(request);
        }

        
         [HttpGet]
        public async Task <List<GetProjectListDetails>> GetProjectList()
        {
            return await _constructorService.getProjectList();
        }

    }
}
