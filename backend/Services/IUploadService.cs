using Backend.Dtos;
using WebApplication1.Dtos.Craftsman.Settings;

namespace Backend.Services
{
    public interface IUploadService
    {

        Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request);
        string SaveImage(string imageBase64, string outputPath);

    }
}