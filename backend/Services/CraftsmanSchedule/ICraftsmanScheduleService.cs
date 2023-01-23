using Backend.Dtos.Project;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{

    public interface ICraftsmanScheduleService
    {
        Task<bool> SendRequest(SendRequestDto request);
        Task<bool> RejectRequest(int RequestId);
        Task<bool> AcceptRequest(int RequestId);

        Task<bool> CancelRequest(int RequestId);

        Task<List<GetGuestRequestListResponseDto>> GetGuestRequestList();
        Task<List<CraftsmanSchedule>> GetCraftsmanRequestList();
        Task<GetTopAvailableCraftsmanInSpecificIntervalResponse> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request);

    }
}