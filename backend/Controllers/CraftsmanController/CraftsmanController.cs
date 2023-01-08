using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class CraftsmanController : Controller
    {


        private readonly ICraftsmanService _craftsmanService;


        public CraftsmanController(ICraftsmanService craftsmanService)
        {
            _craftsmanService = craftsmanService;

        }

        [HttpGet]
        public async Task<GetUserInformationResponse> GetUserInformation()
        {
            return await _craftsmanService.GetUserInformation();
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _craftsmanService.UpdateInformationAsync(request);
        }
    }
}
