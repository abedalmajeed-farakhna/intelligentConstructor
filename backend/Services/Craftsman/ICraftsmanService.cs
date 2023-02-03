﻿using Backend.Dtos.Craftsman;
using Backend.Enums;
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
        Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySectorAndRegion(SectorEnum sector, int region);



    }
 
}