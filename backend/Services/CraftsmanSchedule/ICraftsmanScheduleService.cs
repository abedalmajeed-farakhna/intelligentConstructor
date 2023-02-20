using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Enums;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{

    public interface ICraftsmanScheduleService
    {
        Task<bool> SendRequest(SendRequestDto request);
        Task<bool> RejectRequest(int RequestId);
        Task<bool> AcceptRequest(int RequestId);

        Task<bool> CancelRequest(int RequestId);
        Task<bool> StartWorking(int RequestId);
        Task<bool> DoneWorking(int RequestId);

        Task<List<GetSentRequestListResponseDto>> GetSentRequestList();
        Task<List<CraftsmanSchedule>> GetCraftsmanRequestList();
        Task<List<GetReceivedRequestListSP>> GetReceivedRequestList();
        Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request);
        Task<List<GetTopRatedCraftsmanResponse>> GetTopRatedCraftsman(GetTopRatedCraftsmanRequest request);


        // widgets 
        Task<List<GetLastRequestsResponse>> GetLastRecivedRequestsList();
        Task<List<GetTopRatedRequestsLisResponse>> GetTopRatedRequestsList();
        Task<int> GetNumberOfRecivedRequest(ProjectStatusEnum? projectStatus);
        Task<int> GetNumberOfSentRequest(ProjectStatusEnum? projectStatus);
    }
}