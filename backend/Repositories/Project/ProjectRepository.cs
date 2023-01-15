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
    public class ProjectRepository : IProjectRepository
    {

        private ApplicationDbContext _context;
        public ProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }


    }
}
