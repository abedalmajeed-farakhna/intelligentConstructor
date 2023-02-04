
using WebApplication1.Models;

namespace Backend.Services
{
    public interface IRegionService
    {

        Task<List<Region>> GetRegionList();
       
    }
}