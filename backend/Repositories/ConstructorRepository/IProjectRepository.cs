using Backend.Dtos.Constructor;
using Backend.Dtos.Project;

namespace Backend.Repositories
{
    public interface IProjectRepository
    {

        Task<int> AddNewProject(AddNewProjectRequest request, Guid UserId);

    }

}
