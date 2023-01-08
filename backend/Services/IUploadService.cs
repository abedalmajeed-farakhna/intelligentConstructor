namespace Backend.Services
{
    public interface IUploadService
    {

        //  Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request);
        Task<string> SaveImageAsync(string imageBase64, string outputPath);

    }
}