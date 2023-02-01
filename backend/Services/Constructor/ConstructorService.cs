using Backend.Dtos.Constructor;

using Backend.Dtos.Project;
using Backend.Enums;
using Backend.Repositories;
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
        public ConstructorService(IConstructorRepository constructorRepository, IAuthenticationService authenticationService  ,IUserRepository userRepository ,IProjectRepository projectRepository, ICraftsmanScheduleRepository craftsmanScheduleRepository , ICraftsmanService craftsmanService)
        {
            _userRepository = userRepository;
            _constructorRepository = constructorRepository;
            _authenticationService = authenticationService;
            _projectRepository = projectRepository;
            _craftsmanScheduleRepository = craftsmanScheduleRepository;
            _craftsmanService = craftsmanService;


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
                StartDate = request.Builder.StratDate,
                FromUserId = userId.GetValueOrDefault(),
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
                FromUserId = userId.GetValueOrDefault(),
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
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.HousePainter.UserId,
                EndDate = request.HousePainter.EndDate

            };

            await _craftsmanScheduleRepository.AddNewRequest(housePainterInfo, ProjectStatusEnum.Aproved);

            //Carpenter 
            var carpenterInfo = new AddNewRequestDto
            {ProjectId = projectId,
                Description = "",
                StartDate = request.Carpenter.StratDate,
                FromUserId = userId.GetValueOrDefault(),
                ToUserId = request.Carpenter.UserId,
                EndDate = request.Carpenter.EndDate

            };
         
            await _craftsmanScheduleRepository.AddNewRequest(carpenterInfo, ProjectStatusEnum.Aproved);
   
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
                    ProjectDetails = craftsmanRequestList

                });

            }

            return result ;
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
                    Sector = user.Sector

                });
                
            }); 
            

            var project= await _projectRepository.GetProjectByProjectId(ProjectId);
            return new GetProjectDetailsById
            {
                craftsmans = list,
                ProjectName = project.ProjectName,
                Space = project.Space,
                StartDate = project.StartDate,
                
            };

            


        }


    }
}