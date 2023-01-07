using Backend.Dtos.Craftsman;

namespace Backend.Services
{
    public interface ICraftsmanService
    {

        Task<bool> UpdateInformationAsync(UpdateInformationRequest request);
       
    }
}