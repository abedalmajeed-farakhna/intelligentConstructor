using Backend.Dtos.Craftsman;
using Backend.Repositories;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{
    public class CraftsmanScheduleService : ICraftsmanScheduleService
    {
        private readonly ICraftsmanScheduleRepository _craftsmanScheduleRepository;
        private readonly IAuthenticationService _authenticationService;

        public CraftsmanScheduleService( ICraftsmanScheduleRepository craftsmanScheduleRepository, IAuthenticationService authenticationService)
        {
            _craftsmanScheduleRepository = craftsmanScheduleRepository;
            _authenticationService = authenticationService;
        }

        public async Task<bool> SendRequest(SendRequestDto request)
        {
            // add new Project if project Id = null

            var userId = _authenticationService.GetCurrentUserId();
            var addNewRequestDto = new AddNewRequestDto
            {
                From = request.From,
                To = request.To,
                FromUserId = userId.GetValueOrDefault(),
                 ToUserId = request.ToUserId,
                Description = request.Description,
            };
              return await _craftsmanScheduleRepository.AddNewRequest(addNewRequestDto);

        }
        public async Task<bool> RejectRequest(int RequestId)
        {
              return await _craftsmanScheduleRepository.RejectRequest(RequestId);
        }
        public async Task<bool> AcceptRequest(int RequestId)
        {
             return await _craftsmanScheduleRepository.AcceptRequest(RequestId);
        }
        public async Task<bool> CancelRequest(int RequestId)
        {
            return await _craftsmanScheduleRepository.CancelRequest(RequestId);
        }
        public async Task<List<GetGuestRequestListResponseDto>> GetGuestRequestList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            return await _craftsmanScheduleRepository.GetGuestRequestList(userId.GetValueOrDefault());

        }

        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            return await _craftsmanScheduleRepository.GetCraftsmanRequestList(userId.GetValueOrDefault());
        }

    }   
}