using Backend.Dtos;
using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public interface IUserService
    {

        Task<string> UpdateProfileImageAsync(UpdateProfileImageRequest request);
       
    }
}