using Backend.Dtos.Constructor;
using Backend.Dtos.Craftsman;
using Backend.Dtos.Project;
using Backend.Enums;
using WebApplication1.Models.Craftsman;

namespace Backend.Repositories
{
    public interface ICraftsmanScheduleRepository
    {

        Task<bool> AcceptRequest(int RequestId);
        Task<bool> RejectRequest(int RequestId);

        Task<bool> AddNewRequest(AddNewRequestDto request);
        Task<bool> CancelRequest(int RequestId);

        Task<List<GetGuestRequestListResponseDto>> GetGuestRequestList(Guid userId);
        Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId);
        Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalSpRequest request);

    }
}
