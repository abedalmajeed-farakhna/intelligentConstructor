using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Constructor;

namespace Backend.Repositories
{
    public class ProjectRepository : IProjectRepository
    {

        private ApplicationDbContext _context;
        public ProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }




        public async Task<int> AddNewProject(AddNewProjectRequest request, Guid UserId)
        {

            var data = new Project
            {
                Space = request.Space,
                StartDate = request.StartDate,
                ProjectName = request.ProjectName

            };
            await _context.Project.AddAsync(data);

            _context.SaveChanges();

            return data.ProjectId;
        }

    }
}

