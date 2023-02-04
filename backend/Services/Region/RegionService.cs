using Backend.Repositories;
using WebApplication1.Models;

namespace Backend.Services
{
    public class RegionService : IRegionService
    {
        private readonly IRegionRepository _regionRepository;


        //private readonly UserManager<User> _userManager;
        public RegionService(IRegionRepository regionRepository)
        {

            _regionRepository = regionRepository;
        }
        
        public async Task<List<Region>> GetRegionList()
        {
          return await _regionRepository.GetRegionList();
        }
    }
}
