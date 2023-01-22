using Backend.Dtos.Constructor;

namespace Backend.Repositories
{
    public interface IConstructorRepository
    {

        Task<GetConstructorInformationResponse?> ConstructorInformation(Guid userId);
        Task<bool> AddOrUpdateConstructorInformation(UpdateConstructorInformationRequest request, Guid userID);
        /*
        Task<User?> Login(LoginRequest request);
        
        Task<bool> UpdateUserProfile(Guid userId, string profileImage);
        Task<bool> updateUserInformation(Guid userId, UpdateUserInformationRequest request);
       /* Task<bool> SignUpAsync(SignUpRequest request);
        Task<bool> UpdateUserInformation(User user);*/
    }
}
