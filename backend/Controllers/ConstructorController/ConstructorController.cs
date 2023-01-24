using Microsoft.AspNetCore.Mvc;

using Backend.Services;
using Backend.Dtos.Constructor;
using WebApplication1.Dtos.Constructor;

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
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _constructorService.UpdateInformationAsync(request);
        }
    }
}
