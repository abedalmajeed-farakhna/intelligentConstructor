using Backend.Dtos.Craftsman;
using Backend.Enums;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{
    public interface IConstructorService
    {

        //Task<bool> UpdateInformationAsync(UpdateInformationRequest request);
        Task<GetConstructorInformationResponse> GetConstructorInformation();
       



    }
 
}