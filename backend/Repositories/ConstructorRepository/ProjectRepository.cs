﻿using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Enums;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Constructor;
using WebApplication1.Models.Craftsman;

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
                ProjectName = request.ProjectName,
                UserId = UserId,
                RegionId = request.RegionId
            };

            await _context.Project.AddAsync(data);

            _context.SaveChanges();

            return data.ProjectId;
        }

        public async Task<List<Project>> GetProjectListByUserId(Guid userId)
        {

          return await  _context.Project.Where(t=>t.UserId == userId).ToListAsync();

        }
        public async Task<Project> GetProjectByProjectId(int ProjectId)
        {

            return await _context.Project.Where(t => t.ProjectId == ProjectId).FirstOrDefaultAsync();

        }


    }
}

