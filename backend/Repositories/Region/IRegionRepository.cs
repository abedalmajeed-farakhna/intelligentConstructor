using Backend.Dtos;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IRegionRepository
    {
        Task<List<Region>> GetRegionList();
        Task<Region> GetRegionById(int regionId);
    }
}
