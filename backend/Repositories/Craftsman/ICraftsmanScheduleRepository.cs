﻿using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Models.Craftsman;

namespace Backend.Repositories
{
    public interface ICraftsmanScheduleRepository
    {

        Task<bool> AcceptRequest(int RequestId);
        Task<bool> RejectRequest(int RequestId);

        Task<bool> AddNewRequest(AddNewRequestDto request);
        Task<bool> CancelRequest(int RequestId);


        Task<List<CraftsmanScheduleWithUserDetailsSP>> GetCraftsmanRequestListByProjectId(int projectid);

        Task<List<GetGuestRequestListResponseDto>> GetGuestRequestList(Guid userId);
        Task<List<CraftsmanSchedule>> GetCraftsmanRequestList(Guid userId);
        Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request);

    }
}
