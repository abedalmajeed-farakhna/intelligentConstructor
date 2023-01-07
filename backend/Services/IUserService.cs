using Backend.Dtos;
using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public interface IUserService
    {

        Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request);
       
    }
}