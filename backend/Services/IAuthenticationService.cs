using Backend.Dtos;

namespace Backend.Services
{
    public interface IAuthenticationService
    {
        Task<LoginResponse> LoginAsync(LoginRequest request);
        Task<bool> SignUpAsync(SignUpRequest request);
        Task<bool> SignOutAsync();
        Guid? GetCurrentUserId();
    }
}
