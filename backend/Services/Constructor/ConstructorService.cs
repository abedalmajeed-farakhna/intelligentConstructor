﻿using Backend.Dtos.Constructor;
using Backend.Dtos.Project;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;
using WebApplication1.Models.Constructor;
using WebApplication1.Models.Craftsman;

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
                ProjectId= projectId,
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
                ProjectId = projectId,
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
                ProjectId = projectId,
                Description = "",
                From = request.HousePainter.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.HousePainter.UserId,
                To = request.HousePainter.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(housePainterInfo);

            //Carpenter 
            var carpenterInfo = new AddNewRequestDto
            {ProjectId = projectId,
                Description = "",
                From = request.Carpenter.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.Carpenter.UserId,
                To = request.Carpenter.EndDate

            };
         
            await _craftsmanScheduleRepository.AddNewRequest(carpenterInfo);
   
            return true;
        }

        public async Task<List<GetProjectListDetails>> getProjectList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            var list = await _projectRepository.GetProjectListByUserId(userId.GetValueOrDefault());

            var result = new List<GetProjectListDetails>();
            foreach (var project in list)
            {
                var craftsmanRequestList = await _craftsmanScheduleRepository.GetCraftsmanRequestListByProjectId(project.ProjectId);

                result.Add(new GetProjectListDetails
                {
                    Id = project.ProjectId,
                    ProjectName = project.ProjectName,
                    ProjectDetails = new ProjectDetailsDto
                    {
                        BuilderStage = new StageDetailsDto
                        {
                            projectStatus = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Builder).RequestStatus,
                            StartDate = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Builder).FromeDate,
                        },
                        TilerStage = new StageDetailsDto
                        {
                            projectStatus = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Tiler).RequestStatus,
                            StartDate = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Tiler).FromeDate,
                        },
                        HousePainterStage = new StageDetailsDto
                        {
                            projectStatus = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.HousePainter).RequestStatus,
                            StartDate = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.HousePainter).FromeDate,
                        },
                        CarpenterStage = new StageDetailsDto
                        {
                            projectStatus = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Carpenter).RequestStatus,
                            StartDate = craftsmanRequestList.FirstOrDefault(t => t.Sector == SectorEnum.Carpenter).FromeDate,
                        },

                    }


                });

            }

            return result ;
        }


    }
}