using Backend.Dtos;
using Backend.Dtos.Craftsman;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IConstructorRepository
    {

        Task<GetConstructorInformationResponse?> ConstructorInformation(Guid userId);
        /*
        Task<User?> Login(LoginRequest request);
        
        Task<bool> UpdateUserProfile(Guid userId, string profileImage);
        Task<bool> updateUserInformation(Guid userId, UpdateUserInformationRequest request);
       /* Task<bool> SignUpAsync(SignUpRequest request);
        Task<bool> UpdateUserInformation(User user);*/
    }
}
