using Backend.Dtos.Constructor;
using Backend.Dtos.Project;


namespace Backend.Services
{
    public interface IConstructorService
    {

        Task<bool> UpdateInformationAsync(UpdateInformationRequest request);

        Task<GetConstructorInformationResponse> GetConstructorInformation();
        Task<bool> AddNewProject(AddNewProjectRequest request);





    }
 
}