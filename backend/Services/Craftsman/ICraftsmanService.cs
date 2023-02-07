using Backend.Dtos.Craftsman;
using Backend.Enums;
using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{
    public interface ICraftsmanService
    {

        Task<bool> UpdateInformationAsync(UpdateInformationRequest request);
        Task<GetUserInformationResponse> GetUserInformation();
        Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation();
        Task<CraftsmanUserInformationSP> getCraftsmanInformation(Guid id);
        Task<CraftsmanInformationSP> GetCraftsmanInformationById(Guid id);
        Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySector(SectorEnum sector);
        Task<List<GetImageListResponse>> GetImageGalleryList();
        Task<bool> DeleteImage(int id);



    }
 
}