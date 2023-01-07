using Backend.Dtos;
using WebApplication1.Dtos.Craftsman.Settings;

namespace Backend.Services
{
    public interface IUserService
    {

        Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request);
       
    }
}