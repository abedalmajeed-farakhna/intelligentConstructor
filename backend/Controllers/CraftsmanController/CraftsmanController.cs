using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;

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
        [HttpGet]
        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySector(SectorEnum sector)
        {
            return await _craftsmanService.GetCraftsmanbYSector(sector);
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _craftsmanService.UpdateInformationAsync(request);
        }
    }
}
