using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using WebApplication1.Models.Constructor;

namespace Backend.Services
{
    public interface IConstructorService
    {

        Task<bool> UpdateInformationAsync(UpdateInformationRequest request);

        Task<GetConstructorInformationResponse> GetConstructorInformation();
        Task<int> AddNewProject(AddNewProjectRequest request);
        Task<List<GetProjectListDetails>> getProjectList();
        Task<GetProjectDetailsById> GetProjectDetailsById(int ProjectId);
    }
 
}