using Backend.Dtos;
using Backend.Dtos.Craftsman;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models.Craftsman;

namespace WebApplication1.Services.Guest
{
    public interface IGuestService
    {

        Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation();
        Task<GetGuestInformationResponse> GetGuestInformation();
        Task<bool> UpdateInGuestformationAsync(UpdateGuestInformationRequest request);

    }
}