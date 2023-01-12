using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Services.Guest;
using WebApplication1.Models.Craftsman;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class GuestController : Controller
    {


        private readonly IGuestService _guestService;
        private readonly ICraftsmanService _craftmanService;



        public GuestController(IGuestService guestService ,ICraftsmanService craftsmanService)
        {
            _guestService = guestService;
            _craftmanService =craftsmanService;

        }

        [HttpGet]
        public async Task<GetGuestInformationResponse> GetGuestInformation()
        {
            return await _guestService.GetGuestInformation();
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateGuestInformationRequest request)
        {
            return await _guestService.UpdateInGuestformationAsync(request);
        }
        [HttpGet]
        public async Task<List<CraftsmanUserInformationSP>> CraftsmanList()
        {
            return await _guestService.getAllCraftsmanInformation();
        }
        [HttpGet]
        public async Task<CraftsmanUserInformationSP> GetCraftsmanInformation(Guid id)
        {
            return await _craftmanService.getCraftsmanInformation(id);
        }

    }
}
