using Backend.Dtos.Craftsman;
using Backend.Repositories;

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
        public async Task<bool> RejectRequest(int projectId)
        {
              return await _craftsmanScheduleRepository.RejectRequest(projectId);
        }
        public async Task<bool> AcceptRequest(int projectId)
        {
             return await _craftsmanScheduleRepository.AcceptRequest(projectId);
        }

    }   
}