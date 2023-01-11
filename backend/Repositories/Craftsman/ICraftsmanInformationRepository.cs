using Backend.Dtos;
using Backend.Dtos.Craftsman;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;

namespace Backend.Repositories
{
    public interface ICraftsmanInformationRepository
    {
        Task<CraftsmanInformation?> getUserInformation(Guid userId);
        Task<bool> AddOrUpdateUserInformation(UpdateInformationRequest request, Guid userID);
        Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation();
    }
}
