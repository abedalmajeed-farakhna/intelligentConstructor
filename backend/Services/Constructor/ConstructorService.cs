using Backend.Dtos.Constructor;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public class ConstructorService : IConstructorService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConstructorRepository _constructorRepository;
        private readonly IAuthenticationService _authenticationService;
        public ConstructorService(IConstructorRepository constructorRepository, IAuthenticationService authenticationService  ,IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _constructorRepository = constructorRepository;
            _authenticationService = authenticationService;

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


            var constructorRequest = new UpdateConstructorInformationRequest
            {
                Capacity = request.Capacity,
                Note = request.Note
            };

               await _constructorRepository.AddOrUpdateConstructorInformation( constructorRequest, userId.GetValueOrDefault());

               return true;
        }
        



        public async Task<GetConstructorInformationResponse> GetConstructorInformation()
        {
            var userId = _authenticationService.GetCurrentUserId();

            var data = await _constructorRepository.ConstructorInformation(userId.GetValueOrDefault());
            return new GetConstructorInformationResponse
            {
                UserName = data.UserName,
                FullName = data.FullName,
                ProfileImage = data.ProfileImage,
                Note = data.Note,
                Capacity = data.Capacity

            };
        }





    }
}