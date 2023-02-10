using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class RegionRepository : IRegionRepository
    {

        private ApplicationDbContext _context;
        public RegionRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<List<Region>> GetRegionList()
        {

            return await _context.region.ToListAsync();
        }
        public async Task<Region> GetRegionById(int regionId)
        {
            return await _context.region.FirstOrDefaultAsync(t=>t.Id == regionId);
        }
    }
}
