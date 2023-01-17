//using Backend.Dtos;
using Backend.Dtos.Craftsman;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using WebApplication1.Data.Migrations;
using Azure.Core;

namespace Backend.Repositories
{
    public class CraftsmanScheduleRepository : ICraftsmanScheduleRepository
    {
        

        private ApplicationDbContext _context;

        public CraftsmanScheduleRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AcceptRequest (int projectId )
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == projectId);
            item.Status = ProjectStatusEnum.Aproved;
            _context.SaveChanges();
            return true;
        }

        public async Task<bool> RejectRequest(int projectId)
        {
            var item = await _context.craftsmanSchedule.FirstOrDefaultAsync(t => t.Id == projectId);
            item.Status = ProjectStatusEnum.Rejected;
            _context.SaveChanges();
            return true;
        }
        public async Task<bool>  AddNewRequest(AddNewRequestDto request )
        {
           

           var item = new CraftsmanSchedule
           {
               Status= ProjectStatusEnum.Pending,
               Frome=request.From,
               To=request.To,
               FromUserId=request.FromUserId,
               ToUserId = request.ToUserId

           };
            await _context.craftsmanSchedule.AddAsync(item);
            _context.SaveChanges();

            return true;
        }




    }
}
