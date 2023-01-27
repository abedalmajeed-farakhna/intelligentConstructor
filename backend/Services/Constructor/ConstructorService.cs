using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;
using WebApplication1.Models.Constructor;

namespace Backend.Services
{
    public class ConstructorService : IConstructorService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConstructorRepository _constructorRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly IAuthenticationService _authenticationService;
        private readonly ICraftsmanScheduleRepository _craftsmanScheduleRepository;
        public ConstructorService(IConstructorRepository constructorRepository, IAuthenticationService authenticationService  ,IUserRepository userRepository ,IProjectRepository projectRepository, ICraftsmanScheduleRepository craftsmanScheduleRepository)
        {
            _userRepository = userRepository;
            _constructorRepository = constructorRepository;
            _authenticationService = authenticationService;
            _projectRepository = projectRepository;
            _craftsmanScheduleRepository = craftsmanScheduleRepository;

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

        public async Task<bool> AddNewProject(AddNewProjectRequest request)
        {

            var userId = _authenticationService.GetCurrentUserId();
            if (userId == null)
            {
                throw new Exception();
            }

            var projectId = await _projectRepository.AddNewProject(request, userId.GetValueOrDefault());



            //Builder 
            var builderInfo = new AddNewRequestDto
            {
                Description = "",
                From = request.Builder.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.Builder.UserId,
                To = request.Builder.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(builderInfo);


            //Tiler 
            var tilerInfo = new AddNewRequestDto
            {
                Description = "",
                From = request.Tiler.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.Tiler.UserId,
                To = request.Tiler.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(tilerInfo);

            //HousePainter 
            var housePainterInfo = new AddNewRequestDto
            {
                Description = "",
                From = request.HousePainter.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.HousePainter.UserId,
                To = request.HousePainter.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(housePainterInfo);

            //Carpenter 
            var carpenterInfo = new AddNewRequestDto
            {
                Description = "",
                From = request.Carpenter.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.Carpenter.UserId,
                To = request.Carpenter.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(carpenterInfo);


            return true;
        }








    }
}