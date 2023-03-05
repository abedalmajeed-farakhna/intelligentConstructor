//using Backend.Dtos;
using Backend.Dtos.Craftsman;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using WebApplication1.Data.Migrations;
using Microsoft.Data.SqlClient;
using WebApplication1.Dtos.Settings;
using System.Runtime.CompilerServices;

namespace Backend.Repositories
{
    public class CraftsmanInformationRepository : ICraftsmanInformationRepository
    {

        private ApplicationDbContext _context;
        public CraftsmanInformationRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<CraftsmanInformation?> getUserInformation(Guid userId)
        {

            return await _context.craftsmanInformation.FirstOrDefaultAsync(t => t.UserId == userId);

        }
        public async Task<CraftsmanInformationSP> GetCraftsmanInformationById(Guid userId)
        {
            var userIdParameter = new SqlParameter("@userId", userId);

            string sql = "EXECUTE [dbo].[GetCraftsmanInformationByUserId_SP]  @userId={0}";
            return (await _context.GetUserInformationById.FromSqlRaw(sql, userIdParameter).ToListAsync()).FirstOrDefault();
        }
        public async Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation()
        {

            string sql = "exec [dbo].[CraftsmanUserInformation_sp]";
            return await _context.CraftsmanUserInformation.FromSqlRaw(sql)?.ToListAsync();

        }
        public async Task<CraftsmanUserInformationSP> getCraftsmanInformation(Guid id)
        {

            string sql = "exec [dbo].[CraftsmanUserInformation_sp]";
            return await _context.CraftsmanUserInformation.FromSqlRaw(sql)?.FirstOrDefaultAsync(t=>t.Id == id.ToString());


        }

        public async Task<bool> AddOrUpdateUserInformation(UpdateInformationRequest request, Guid userID)
        {

            var userInformation = await getUserInformation(userID);
            if(userInformation == null)
            {
                userInformation = new CraftsmanInformation
                {
                    UserId = userID,
                    Sector = request.Sector,
                    Note = request.Note,
                    Speed = request.Speed,
                    Region = request.Region
                };
                await _context.craftsmanInformation.AddAsync(userInformation);
            }
            else
            {
                userInformation.Sector = request.Sector;
                userInformation.Note = request.Note;
                userInformation.Speed = request.Speed;
                userInformation.Region = request.Region;

            }

            _context.SaveChanges();

            return true;
        }

        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySector(SectorEnum sector)
        {

            string sql = "exec [dbo].[CraftsmanUserInformation_sp]";
            var list = await _context.CraftsmanUserInformation.FromSqlRaw(sql).ToListAsync();
            return list.Where(t => t.Sector == sector ).OrderByDescending(t=>t.RatingValue).ToList();

        }
        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySectorAndRegion(SectorEnum sector, int regionId)
        {

            string sql = "exec [dbo].[CraftsmanUserInformation_sp]";
            var list = await _context.CraftsmanUserInformation.FromSqlRaw(sql).ToListAsync();
            return list.Where(t => t.Sector == sector && t.RegionId == regionId).ToList();

        }
    }
}
