using Backend.Dtos.Craftsman;
using Backend.Repositories;

namespace Backend.Services
{
    public class CraftsmanService : ICraftsmanService
    {
        private readonly ICraftsmanInformationRepository _craftsmanInformationRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAuthenticationService _authenticationService;
        public CraftsmanService(ICraftsmanInformationRepository craftsmanInformationRepository, IAuthenticationService authenticationService, IUserRepository userRepository)
        {
            _craftsmanInformationRepository = craftsmanInformationRepository;
            _authenticationService = authenticationService;
            _userRepository = userRepository;

        }

        public async Task<bool> UpdateInformationAsync(UpdateInformationRequest request)
        {

            var userId = _authenticationService.GetCurrentUserId();
            if(userId == null)
            {
                throw new Exception();
            }
            await _craftsmanInformationRepository.AddOrUpdateUserInformation( request, userId.GetValueOrDefault());
            
            return true;
        }


        public async Task<GetUserInformationResponse> GetUserInformation()
        {
            var userId = _authenticationService.GetCurrentUserId();
            var user = await _userRepository.GetUserProfile(userId.GetValueOrDefault());
            var craftmanInformation = await _craftsmanInformationRepository.getUserInformation(userId.GetValueOrDefault());
            return new GetUserInformationResponse
            {
                FullName = user.UserName,
                ProfileImage = user.ProfileImage,
                Sector = craftmanInformation?.Sector,
                Speed = craftmanInformation?.Speed,
                Note = craftmanInformation?.Note
            };
        }
    }
}