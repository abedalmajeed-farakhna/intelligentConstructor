using Backend.Dtos;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IUserRepository
    {
        Task<User?> Login(LoginRequest request);
       /* Task<bool> SignUpAsync(SignUpRequest request);
        Task<bool> UpdateUserInformation(User user);*/
    }
}
