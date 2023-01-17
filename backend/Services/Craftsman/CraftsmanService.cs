using Backend.Dtos.Craftsman;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models.Craftsman;

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

            var updateUserInformationRequest = new UpdateUserInformationRequest
            {
                FullName = request.FullName,
            };
            await _userRepository.updateUserInformation(userId.GetValueOrDefault(), updateUserInformationRequest);
            await _craftsmanInformationRepository.AddOrUpdateUserInformation( request, userId.GetValueOrDefault());
            
            return true;
        }

        public async Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation()
        {
            return  await _craftsmanInformationRepository.getAllCraftsmanInformation();
        }
        public async Task<CraftsmanUserInformationSP> getCraftsmanInformation(Guid id)
        {

            return await _craftsmanInformationRepository.getCraftsmanInformation(id);
        }
        public async Task<GetUserInformationResponse> GetUserInformation()
        {
            var userId = _authenticationService.GetCurrentUserId();
            var user = await _userRepository.GetUserProfile(userId.GetValueOrDefault());
            if(user == null)
            {
                throw new Exception("Unauthorized");

            }
            var craftmanInformation = await _craftsmanInformationRepository.getUserInformation(userId.GetValueOrDefault());
            return new GetUserInformationResponse
            {
                UserName = user.UserName,
                FullName = user.FullName,
                ProfileImage = user.ProfileImage,
                Sector = craftmanInformation?.Sector,
                Speed = craftmanInformation?.Speed,
                Note = craftmanInformation?.Note
            };
        }
        public async Task<CraftsmanInformationSP> GetCraftsmanInformationById(Guid id)
        {
           return await _craftsmanInformationRepository.GetCraftsmanInformationById(id);
        }
        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanbYSector(SectorEnum sector)
        {

            return await _craftsmanInformationRepository.GetCraftsmanbYSector(sector);
        }


       
    }
}