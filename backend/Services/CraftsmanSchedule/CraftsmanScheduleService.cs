using Backend.Dtos.Constructor;
using Backend.Dtos.Craftsman;
using Backend.Dtos.Project;
using Backend.Enums;
using Backend.Repositories;
using WebApplication1.Data.Migrations;
using WebApplication1.Dtos.Constructor;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{
    public class CraftsmanScheduleService : ICraftsmanScheduleService
    {
        private readonly ICraftsmanScheduleRepository _craftsmanScheduleRepository;
        private readonly ICraftsmanInformationRepository _craftsmanInformationRepository;
        private readonly IAuthenticationService _authenticationService;

        public CraftsmanScheduleService(ICraftsmanScheduleRepository craftsmanScheduleRepository, IAuthenticationService authenticationService, ICraftsmanInformationRepository craftsmanInformationRepository)
        {
            _craftsmanScheduleRepository = craftsmanScheduleRepository;
            _authenticationService = authenticationService;
            _craftsmanInformationRepository = craftsmanInformationRepository;
        }

        public async Task<bool> SendRequest(SendRequestDto request)
        {
            // add new Project if project Id = null

            var userId = _authenticationService.GetCurrentUserId();
            var addNewRequestDto = new AddNewRequestDto
            {
                StartDate = request.From,
                EndDate = request.To,
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
        public async Task<List<GetSentRequestListResponseDto>> GetSentRequestList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            return await _craftsmanScheduleRepository.GetSentRequestList(userId.GetValueOrDefault());

        }

        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            return await _craftsmanScheduleRepository.GetCraftsmanRequestList(userId.GetValueOrDefault());
        }

        public async Task<List<GetTopAvailableCraftsmanInSpecificInterval>> GetTopAvailableCraftsmanInSpecificInterval(GetTopAvailableCraftsmanInSpecificIntervalRequest request)
        {

            var craftsmanList = await _craftsmanInformationRepository.GetCraftsmanbYSector(request.Sector);


            var result = new List<GetTopAvailableCraftsmanInSpecificInterval>();
            foreach (var item in craftsmanList)
            {
                var expectedStartDate = await _craftsmanScheduleRepository.GetFirstAvailableDate(new Guid(item.Id), request.FromDate);
                var speed = item.Speed ?? 1;
                var expectedTime = Math.Ceiling(((double)request.Space / speed));
               
                result.Add(new GetTopAvailableCraftsmanInSpecificInterval
                {
                    Username = item.UserName,
                    Speed = item.Speed,
                    ProfileImage = item.ProfileImage,
                    Note = item.Note,
                    Id = new Guid(item.Id),
                    FullName = item.FullName,
                    Sector = item.Sector.GetValueOrDefault(),
                    ExpectedStartDate = expectedStartDate.GetValueOrDefault(),
                    ExpectedEndDate = expectedStartDate.GetValueOrDefault().AddDays(expectedTime),
                    ExpectedTime = (int)expectedTime
                });
            }

            return result.OrderBy(t => t.ExpectedEndDate).ToList();

        }
    }
}