using Backend.Dtos;
using Backend.Dtos.Craftsman;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface ICraftsmanInformationRepository
    {
        Task<CraftsmanInformation?> getUserInformation(Guid userId);
        Task<bool> AddOrUpdateUserInformation(UpdateInformationRequest request, Guid userID);
    }
}
