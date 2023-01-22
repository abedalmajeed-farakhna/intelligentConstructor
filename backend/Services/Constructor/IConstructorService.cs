using Backend.Dtos.Constructor;

using Backend.Enums;

namespace Backend.Services
{
    public interface IConstructorService
    {

        Task<bool> UpdateInformationAsync(UpdateInformationRequest request);
        Task<GetConstructorInformationResponse> GetConstructorInformation();




    }
 
}