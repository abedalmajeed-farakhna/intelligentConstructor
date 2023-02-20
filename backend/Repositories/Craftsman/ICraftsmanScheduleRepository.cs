using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Enums;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models.Craftsman;

namespace Backend.Repositories
{
    public interface ICraftsmanScheduleRepository
    {

        Task<bool> AcceptRequest(int RequestId);
        Task<bool> RejectRequest(int RequestId);


        Task<bool> DoneWorking(int RequestId);
        Task<bool> StartWorking(int RequestId);
        Task<bool> AddNewRequest(AddNewRequestDto request, ProjectStatusEnum RequestStatus = ProjectStatusEnum.Pending);
        Task<bool> CancelRequest(int RequestId);
        Task<CraftsmanSchedule> GetRequestDetailsById(int RequestId);


        Task<List<CraftsmanScheduleWithUserDetailsSP>> GetCraftsmanRequestListByProjectId(int projectid);

        Task<List<GetSentRequestListResponseDto>> GetSentRequestList(Guid userId);
        Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId);
        Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request);
        Task<DateTime?> GetFirstAvailableDate(Guid userId, DateTime projectStartDate);
        Task<List<CraftsmanSchedule>> GetProjectDetailsById(int ProjectId);
        Task<List<GetReceivedRequestListSP>> GetReceivedRequestList(Guid userId);


        // widgets 
        Task<int> GetNumberOfRecivedRequest(Guid userId, ProjectStatusEnum? projectStatus);
        Task<int> GetNumberOfSentRequest(Guid userId, ProjectStatusEnum? projectStatus);
        Task<List<GetLastRequestsResponse>> GetLastRecivedRequestsList(Guid userId);
        Task<List<GetTopRatedRequestsLisResponse>> GetTopRatedRequestsList(Guid userId);

    }
}
