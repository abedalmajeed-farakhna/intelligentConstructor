//using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using Microsoft.Data.SqlClient;
using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Models;
using Backend.Dtos.Craftsman;

namespace Backend.Repositories
{
    public class CraftsmanScheduleRepository : ICraftsmanScheduleRepository
    {


        private ApplicationDbContext _context;

        public CraftsmanScheduleRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AcceptRequest(int RequestId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
            if (item == null)
            {
                return false;
            }
            item.RequestStatus = ProjectStatusEnum.Aproved;
            _context.SaveChanges();
            return true;
        }

        public async Task<bool> RejectRequest(int RequestId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
            if (item == null)
            {
                return false;
            }
            item.RequestStatus = ProjectStatusEnum.Rejected;
            _context.SaveChanges();
            return true;
        }
        public async Task<bool> AddNewRequest(AddNewRequestDto request, ProjectStatusEnum RequestStatus = ProjectStatusEnum.Pending)
        {


            var item = new CraftsmanSchedule
            {
                RequestStatus = RequestStatus,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                FromUserId = request.FromUserId,
                ToUserId = request.ToUserId,
                RequestDescription = request.Description,
                ProjectId = request.ProjectId,

            };
            await _context.craftsmanSchedule.AddAsync(item);
            _context.SaveChanges();

            return true;
        }
        public async Task<bool> CancelRequest(int RequestId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
            if(item == null)
            {
                return false;
            }
            item.RequestStatus = ProjectStatusEnum.Cancel;
            _context.SaveChanges();
            return true;
        }
        public async Task<List<GetGuestRequestListResponseDto>> GetGuestRequestList(Guid userId)
        {


            var userIdParameter = new SqlParameter("@userId", userId);

            string sql = "EXECUTE [dbo].[GetGuestRequestList_SP]  @userId={0}";
            return (await _context.GuestRequestList.FromSqlRaw(sql, userIdParameter).ToListAsync());

         
        }

        public async Task<List<CraftsmanScheduleWithUserDetailsSP>> GetCraftsmanRequestListByProjectId(int projectid)
        {

            string sql = "EXECUTE [dbo].[CraftsmanScheduleWithUserDetailsSP] ";
            var list = await _context.CraftsmanScheduleWithUserDetailsSP.FromSqlRaw(sql).ToListAsync();
            return list.Where(t=>t.ProjectId== projectid).ToList(); 
        }
        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId)
        {
            return await _context.craftsmanSchedule.Where(t => t.ToUserId == userId).ToListAsync();
        }


        public async Task<DateTime?> GetFirstAvailableDate(Guid userId, DateTime projectStartDate)
        {


            var userIdParameter = new SqlParameter("@userId", userId);
            var projectStartDateParameter = new SqlParameter("@projectStartDate", projectStartDate);

            string sql = "EXECUTE [dbo].[GetFirstAvailableDate_SP]  @userId={0} , @projectStartDate={1}";
            var list = await _context.GetFirstAvailableDateSP.FromSqlRaw(sql, userIdParameter, projectStartDateParameter).ToListAsync();
            if(list.Count == 0)
            {
                return projectStartDate;
            }
            return (list).First().FirstAvailableDate;


        }
        public async Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request)
        {
           

            var sectorParameter = new SqlParameter("@sector", request.Sector) ;
            var fromDateParameter = new SqlParameter("@fromDate", request.FromDate);
            var SpaceParameter = new SqlParameter("@totalspace", request.Space);

            string sql = "EXECUTE [dbo].[GetTopAvailableCraftsmanInSpecificInterval]  @sector={0} , @fromDate={1}, @totalspace ={2}";
            return (await _context.GetTopAvailableCraftsmanInSpecificInterval.FromSqlRaw(sql, sectorParameter , fromDateParameter, SpaceParameter).ToListAsync());


        }
        public async Task <List<CraftsmanSchedule>> GetProjectDetailsById(int ProjectId)
        {

            return await _context.craftsmanSchedule.Where(t => t.ProjectId == ProjectId).ToListAsync();

        }



    }
}
