//using Backend.Dtos;
using Backend.Dtos.Craftsman;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using WebApplication1.Data.Migrations;

namespace Backend.Repositories
{
    public class CraftsmanScheduleRepository : ICraftsmanScheduleRepository
    {
        

        private ApplicationDbContext _context;

        public CraftsmanScheduleRepository(ApplicationDbContext context)
        {
            _context = context;
        }



    }
}
