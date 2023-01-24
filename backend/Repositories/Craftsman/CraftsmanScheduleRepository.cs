﻿//using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using Microsoft.Data.SqlClient;
using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using WebApplication1.Dtos.Constructor;

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
        public async Task<bool> AddNewRequest(AddNewRequestDto request)
        {


            var item = new CraftsmanSchedule
            {
                RequestStatus = ProjectStatusEnum.Pending,
                FromeDate = request.From,
                ToDate = request.To,
                FromUserId = request.FromUserId,
                ToUserId = request.ToUserId,
                RequestDescription = request.Description

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
        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId)
        {
            return await _context.craftsmanSchedule.Where(t => t.ToUserId == userId).ToListAsync();
        }

        public async Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request)
        {
           

            var sectorParameter = new SqlParameter("@sector", request.Sector) ;
            var fromDateParameter = new SqlParameter("@fromDate", request.FromDate);
            var ToDateParameter = new SqlParameter("@toDate", request.ToDate);

            string sql = "EXECUTE [dbo].[GetGuestRequestList_SP]  @sector={0} , @toDate={1}, @fromDate={2}";
            return (await _context.GetTopAvailableCraftsmanInSpecificInterval.FromSqlRaw(sql, sectorParameter , fromDateParameter, ToDateParameter).ToListAsync());


        }



    }
}
