using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;

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
        
      
     /*   

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _constructorService.UpdateInformationAsync(request);
        }*/
    }
}
