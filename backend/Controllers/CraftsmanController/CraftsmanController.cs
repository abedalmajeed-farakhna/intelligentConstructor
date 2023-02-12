using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using WebApplication1.Dtos.ImageGallery;

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
        public async Task<CraftsmanInformationSP> GetCraftsmanInformationById(Guid id)
        {
            return await _craftsmanService.GetCraftsmanInformationById(id);
        }
        [HttpGet]
        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySector(SectorEnum sector, int region)
        {
            return await _craftsmanService.GetCraftsmanBySector(sector);
        }

        // [Authorize]
        [HttpPost]
        public async Task<bool> updateInformation([FromBody]UpdateInformationRequest request)
        {
            return await _craftsmanService.UpdateInformationAsync(request);
        }
        [HttpGet]
        public async Task<List<GetImageListResponse>> GetImageList(int? requestId, Guid? userId)
        {
            return await _craftsmanService.GetImageGalleryList(requestId, userId);
        }

        [HttpPost]
        public async Task<bool> DeleteImage([FromBody] DeleteImageRequest request)
        {
            return await _craftsmanService.DeleteImage(request.ImageGalleryId);
        }
        [HttpPost]
        public async Task<bool> DeleteSection([FromBody] DeleteSectionRequest request)
        {
            return await _craftsmanService.DeleteSection(request.SectionId);
        }
        [HttpPost]
        public async Task<bool> AddImageForSpecificRequest([FromBody] AddImageForSpecificRequestRequest request)
        {
             return await _craftsmanService.AddImageForSpecificRequest( request);
        }
    }
}
