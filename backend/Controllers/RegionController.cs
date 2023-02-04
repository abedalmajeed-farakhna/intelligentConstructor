using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using WebApplication1.Models;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class RegionController : Controller
    {

        private readonly IRegionService _regionService;

        public RegionController(IRegionService regionService)
        {
            _regionService = regionService;
        }

        [HttpGet]
        public async Task<List<Region>> GetRegionList()
        {
            return await _regionService.GetRegionList();
        }
    }
}
