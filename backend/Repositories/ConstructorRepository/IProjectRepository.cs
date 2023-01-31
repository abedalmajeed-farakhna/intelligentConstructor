using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using WebApplication1.Models.Constructor;

namespace Backend.Repositories
{
    public interface IProjectRepository
    {

        Task<int> AddNewProject(AddNewProjectRequest request, Guid UserId);
        Task<List<Project>> GetProjectListByUserId(Guid userId);
        Task<Project> GetProjectByProjectId(int ProjectId);

    }

}
