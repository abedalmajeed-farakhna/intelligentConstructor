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
using WebApplication1.Dtos.Settings;

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

        public async Task<bool> DoneWorking(int RequestId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
            if (item == null)
            {
                return false;
            }
            item.RequestStatus = ProjectStatusEnum.Done;
            item.EndDate = DateTime.Now;
            _context.SaveChanges();
            return true;
        }

        public async Task<bool> StartWorking(int RequestId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
            if (item == null)
            {
                return false;
            }
            item.RequestStatus = ProjectStatusEnum.Inprogres;
            item.StartDate = DateTime.Now;
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

        public async Task<CraftsmanSchedule> GetRequestDetailsById(int RequestId)
        {
           return  await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == RequestId);
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
        public async Task<List<GetSentRequestListResponseDto>> GetSentRequestList(Guid userId)
        {


            var userIdParameter = new SqlParameter("@userId", userId);

            string sql = "EXECUTE [dbo].[GetSentRequestList_SP]  @userId={0}";
            var asd = await _context.GuestRequestList.FromSqlRaw(sql, userIdParameter).ToListAsync();
            return (await _context.GuestRequestList.FromSqlRaw(sql, userIdParameter).ToListAsync());

         
        }


        public async Task<List<GetReceivedRequestListSP>> GetReceivedRequestList(Guid userId)
        {
            var userIdParameter = new SqlParameter("@userId", userId);

            string sql = "EXECUTE [dbo].[GetreceivedRequestList_SP]  @userId={0}";
            return (await _context.ReceivedRequestList.FromSqlRaw(sql, userIdParameter).ToListAsync());

        }
        public async Task<List<CraftsmanScheduleWithUserDetailsSP>> GetCraftsmanRequestListByProjectId(int projectid)
        {

            string sql = "EXECUTE [dbo].[CraftsmanScheduleWithUserDetailsSP] ";
            var list = await _context.CraftsmanScheduleWithUserDetailsSP.FromSqlRaw(sql).ToListAsync();
            return list.Where(t=>t.ProjectId== projectid).ToList(); 
        }
        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId)
        {
            return await _context.craftsmanSchedule.Where(t => t.ToUserId == userId).OrderByDescending(t=>t.Id).ToListAsync();
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
        public async Task<List<CraftsmanSchedule>> GetProjectDetailsById(int ProjectId)
        {

            return await _context.craftsmanSchedule.Where(t => t.ProjectId == ProjectId).OrderByDescending(t => t.Id).ToListAsync();

        }




        // widgets 
        public async Task<List<GetLastRequestsResponse>> GetLastRecivedRequestsList(Guid userId)
        {
            return await _context.craftsmanSchedule.Where(t => t.ToUserId == userId).OrderByDescending(t => t.Id).Take(5).Select(t => new GetLastRequestsResponse
            {
                RequestDescription = t.RequestDescription,
                RequestStatus = t.RequestStatus,
                Id = t.Id,
            }).ToListAsync();
        }

        public async Task<List<GetTopRatedRequestsLisResponse>> GetTopRatedRequestsList(Guid userId)
        {
            string sql = "EXECUTE [dbo].[CraftsmanScheduleWithUserDetailsSP]";
            var list = await _context.CraftsmanScheduleWithUserDetailsSP.FromSqlRaw(sql).ToListAsync();
            return list.Where(t => t.ToUserId == userId && t.RequestStatus == ProjectStatusEnum.Done)
                .OrderByDescending(t => t.RateValue).TakeLast(5).Select(t => new GetTopRatedRequestsLisResponse
                {
                    RequestDescription = t.RequestDescription,
                    RequestStatus = t.RequestStatus,
                    Id = t.Id,
                    RateValue = t.RateValue,
                }).ToList();
        }
        public async Task<int> GetNumberOfRecivedRequest(Guid userId, ProjectStatusEnum? projectStatus)
        {
            var list = _context.craftsmanSchedule.Where(t => t.ToUserId == userId);
            if (projectStatus != null)
            {
                list = list.Where(t => t.RequestStatus == projectStatus);

            }
            return await list.CountAsync();
        }
        public async Task<int> GetNumberOfSentRequest(Guid userId, ProjectStatusEnum? projectStatus)
        {
            var list = _context.craftsmanSchedule.Where(t => t.FromUserId == userId);
            if (projectStatus != null)
            {
                list = list.Where(t => t.RequestStatus == projectStatus);

            }
            return await list.CountAsync();
        }
    }
}
