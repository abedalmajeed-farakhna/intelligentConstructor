using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Dtos.Constructor;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class ConstructorController : Controller
    {


        private readonly IConstructorService _constructorService;


        public ConstructorController(IConstructorService constructorService)
        {
            _constructorService = constructorService;

        }

        [HttpGet]
        public async Task<GetConstructorInformationResponse> GetConstructorInformation()
        {
            return await _constructorService.GetConstructorInformation();
        }
        
      
     

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _constructorService.UpdateInformationAsync(request);
        }
    }
}
