using Backend.Dtos.Craftsman;

namespace Backend.Repositories
{
    public interface ICraftsmanScheduleRepository
    {

        Task<bool> AcceptRequest(int projectId);
        Task<bool> RejectRequest(int projectId);

        Task<bool> AddNewRequest(AddNewRequestDto request);

    }
}
