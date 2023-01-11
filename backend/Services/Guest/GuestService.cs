using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using System.Buffers.Text;
using System.Drawing;
using System.Drawing.Imaging;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;

namespace WebApplication1.Services.Guest
{
    public class GuestService : IGuestService
    {
        private readonly ICraftsmanInformationRepository _craftsmanInformationRepository;

        public GuestService(ICraftsmanInformationRepository craftsmanInformationRepository)
        {
            _craftsmanInformationRepository = craftsmanInformationRepository;

        }

        public async Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation()
        {
            return await _craftsmanInformationRepository.getAllCraftsmanInformation();
        }
    }
}