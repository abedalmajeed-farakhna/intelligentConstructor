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
                     Note= request.Note,
                      Speed= request.Speed
                };
                await _context.craftsmanInformation.AddAsync(userInformation);
            }
            else
            {
                userInformation.Sector = request.Sector;
                userInformation.Note = request.Note;
                userInformation.Speed = request.Speed;
            }

            _context.SaveChanges();

            return true;
        }

        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanbYSector(SectorEnum sector)
        {

            string sql = "exec [dbo].[CraftsmanUserInformation_sp]";
            var list = await _context.CraftsmanUserInformation.FromSqlRaw(sql).ToListAsync();
            return list.Where(t => t.Sector == sector).ToList();

        }

       
    }
}
