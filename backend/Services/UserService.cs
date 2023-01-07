using WebApplication1.Dtos.Settings;

namespace Backend.Services
{
    public class UserService : IUserService
    {
        public UserService()
        {

        }

        public async Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request)
        {
            return true;
        }

    }
}