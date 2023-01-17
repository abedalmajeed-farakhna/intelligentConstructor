using Backend.Dtos.Craftsman;

namespace Backend.Services
{
    public interface ICraftsmanScheduleService
    {
        Task<bool> SendRequest(SendRequestDto request);
        Task<bool> RejectRequest(int projectId);
        Task<bool> AcceptRequest(int projectId);
    }
}