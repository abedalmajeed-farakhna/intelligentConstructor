using Backend.Dtos.Constructor;

using Backend.Dtos.Project;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public class ConstructorService : IConstructorService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConstructorRepository _constructorRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly IAuthenticationService _authenticationService;
        private readonly ICraftsmanScheduleRepository _craftsmanScheduleRepository;
        private readonly ICraftsmanService _craftsmanService;
        private readonly IRegionRepository _regionRepository;
        public ConstructorService(IConstructorRepository constructorRepository, IAuthenticationService authenticationService  ,IUserRepository userRepository ,IProjectRepository projectRepository, ICraftsmanScheduleRepository craftsmanScheduleRepository , ICraftsmanService craftsmanService, IRegionRepository regionRepository )
        {
            _userRepository = userRepository;
            _constructorRepository = constructorRepository;
            _authenticationService = authenticationService;
            _projectRepository = projectRepository;
            _craftsmanScheduleRepository = craftsmanScheduleRepository;
            _craftsmanService = craftsmanService;
            _regionRepository = regionRepository;

        }

           public async Task<bool> UpdateInformationAsync(Dtos.Constructor.UpdateInformationRequest request)
           {

               var userId = _authenticationService.GetCurrentUserId();
               if(userId == null)
               {
                   throw new Exception();
               }

               var updateUserInformationRequest = new UpdateUserInformationRequest
               {
                   FullName = request.FullName,
                    PhoneNumber= request.PhoneNumber, 
                      
                     
               };
               await _userRepository.updateUserInformation(userId, updateUserInformationRequest);


            var constructorRequest = new UpdateConstructorInformationRequest
            {
                Capacity = request.Capacity,
                Note = request.Note

            };

               await _constructorRepository.AddOrUpdateConstructorInformation( constructorRequest, userId);

               return true;
        }
        



        public async Task<GetConstructorInformationResponse> GetConstructorInformation()
        {
            var userId = _authenticationService.GetCurrentUserId();

            var data = await _constructorRepository.ConstructorInformation(userId);
            
            return new GetConstructorInformationResponse
            {
                UserName = data.UserName,
                FullName = data.FullName,
                ProfileImage = data.ProfileImage,
                Note = data.Note,
                Capacity = data.Capacity,
                phoneNumber= data.phoneNumber,

            };
        }

        public async Task<int> AddNewProject(AddNewProjectRequest request)
        {

            var userId = _authenticationService.GetCurrentUserId();
            if (userId == null)
            {
                throw new Exception();
            }
            var constructorInformation = await  _constructorRepository.ConstructorInformation(userId);
            if(constructorInformation.Capacity < request.Space)
            {
                //return new StatusCodeResult(404, "Not found");
                throw new Exception($"area should be less than {constructorInformation.Capacity}");
            }

            var projectId = await _projectRepository.AddNewProject(request, userId);
            /*
            

            //Builder 
            var builderInfo = new AddNewRequestDto
            {
                ProjectId= projectId,
                Description = "",
                StartDate = request.Builder.StratDate,
                FromUserId = userId,
                ToUserId = request.Builder.UserId,
                EndDate = request.Builder.EndDate


            };

            await _craftsmanScheduleRepository.AddNewRequest(builderInfo, ProjectStatusEnum.Aproved);


            //Tiler 
            var tilerInfo = new AddNewRequestDto
            {
                ProjectId = projectId,
                Description = "",
                StartDate = request.Tiler.StratDate,
                FromUserId = userId,
                ToUserId = request.Tiler.UserId,
                EndDate = request.Tiler.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(tilerInfo, ProjectStatusEnum.Aproved);

            //HousePainter 
            var housePainterInfo = new AddNewRequestDto
            {
                ProjectId = projectId,
                Description = "",
                StartDate = request.HousePainter.StratDate,
                FromUserId = userId,
                ToUserId = request.HousePainter.UserId,
                EndDate = request.HousePainter.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(housePainterInfo, ProjectStatusEnum.Aproved);

            //Carpenter 
            var carpenterInfo = new AddNewRequestDto
            {ProjectId = projectId,
                Description = "",
                StartDate = request.Carpenter.StratDate,
                FromUserId = userId,
                ToUserId = request.Carpenter.UserId,
                EndDate = request.Carpenter.EndDate

            };
         
            await _craftsmanScheduleRepository.AddNewRequest(carpenterInfo, ProjectStatusEnum.Aproved);*/
   
            return projectId;
        }

        public async Task<List<GetProjectListDetails>> getProjectList()
        {
            var userId = _authenticationService.GetCurrentUserId();
            var list = await _projectRepository.GetProjectListByUserId(userId);

            var result = new List<GetProjectListDetails>();
            foreach (var project in list)
            {
                var craftsmanRequestList = await _craftsmanScheduleRepository.GetCraftsmanRequestListByProjectId(project.ProjectId);

                result.Add(new GetProjectListDetails
                {
                    Id = project.ProjectId,
                    ProjectName = project.ProjectName,
                    ElectricianFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.Electrician)?.ToUserName,
                     PlumberFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.Plumber)?.ToUserName,
                     BuilderFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.Builder)?.ToUserName,
                     TilerFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.Tiler)?.ToUserName,
                     HousPainterFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.HousePainter)?.ToUserName,
                     CarpenterFullName = craftsmanRequestList?.FirstOrDefault(t => t.Sector == SectorEnum.Carpenter)?.ToUserName,

                    ProjectDetails = craftsmanRequestList

                });

            }

            return result.OrderByDescending(t => t.Id).ToList();
        }

        public async Task<GetProjectDetailsById> GetProjectDetailsById(int ProjectId)
        {

            // scahdulTbale
            var craftsmans = await _craftsmanScheduleRepository.GetProjectDetailsById(ProjectId);
            var list = new List<CraftsmanInformationDto>();
            var craftsmansInformation = await _craftsmanService.getAllCraftsmanInformation();

            craftsmans.ForEach(async t =>
            {
                var user = craftsmansInformation.FirstOrDefault(u => u.Id == t.ToUserId.ToString());
                list.Add(new CraftsmanInformationDto
                {
                    ExpectedEndDate = t.EndDate,
                    ExpectedStartDate = t.StartDate,
                    projectStatus = t.RequestStatus,
                    FullName = user.FullName,
                    UserName = user.UserName,
                    Sector = user.Sector,
                    RatingValue = user.RatingValue,
                    UserId = new Guid(user.Id),
                    RequestId = t.Id
                });
                
            }); 
            

            var project= await _projectRepository.GetProjectByProjectId(ProjectId);
            var region = await _regionRepository.GetRegionById(project.RegionId);
            return new GetProjectDetailsById
            {
                craftsmans = list,
                Region = region,
                ProjectName = project.ProjectName,
                Space = project.Space,
                StartDate = project.StartDate,

            };

        }



        public async Task<GetRequestDetailsById> GetRequestDetailsById(int requestId)
        {

            var details =await _craftsmanScheduleRepository.GetRequestDetailsById(requestId);
            var list = await _craftsmanService.GetImageGalleryList(requestId, null);
            var user = await _userRepository.GetUserProfile(details.ToUserId);
            var projectName = "";
            if(details.ProjectId != 0 && details.ProjectId != null)
            {
                projectName =( await _projectRepository.GetProjectByProjectId(details.ProjectId.GetValueOrDefault()))?.ProjectName;
            }
            return new GetRequestDetailsById
            {
                EndDate = details.EndDate,
                ToUserName = user.FullName,
                Id = details.Id,
                ImageGalleryList = list,
                ProjectId = details.ProjectId,
                ProjectName = projectName,
                RequestDescription = details.RequestDescription,
                RequestStatus = details.RequestStatus,
                StartDate = details.StartDate,
                ToUserId = details.ToUserId,
            };
        }
    }
}