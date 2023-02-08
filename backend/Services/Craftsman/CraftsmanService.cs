using Azure.Core;
using Backend.Dtos.Craftsman;
using Backend.Enums;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApplication1.Dtos.ImageGallery;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;

namespace Backend.Services
{
    public class CraftsmanService : ICraftsmanService
    {
        private readonly ICraftsmanInformationRepository _craftsmanInformationRepository;
        private readonly IImageGalleryRepository _imageGalleryRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAuthenticationService _authenticationService;
        private readonly IUploadService _uploadService;

        public CraftsmanService(ICraftsmanInformationRepository craftsmanInformationRepository, IAuthenticationService authenticationService, IUserRepository userRepository, IUploadService uploadService, IImageGalleryRepository imageGalleryRepository)
        {
            _craftsmanInformationRepository = craftsmanInformationRepository;
            _authenticationService = authenticationService;
            _userRepository = userRepository;
            _uploadService = uploadService;
            _imageGalleryRepository = imageGalleryRepository;
        }

        public async Task<bool> UpdateInformationAsync(UpdateInformationRequest request)
        {

            var userId = _authenticationService.GetCurrentUserId();
            if(userId == null)
            {
                throw new Exception();
            }

            var updateUserInformationRequest = new UpdateUserInformationRequest
            {
                FullName = request.FullName,
                PhoneNumber = request.PhoneNumber,
            };
            await _userRepository.updateUserInformation(userId, updateUserInformationRequest);
            await _craftsmanInformationRepository.AddOrUpdateUserInformation( request, userId);


            await AddImageList(request.ImageList, userId,"");
            
            return true;
        }

        public async Task<List<CraftsmanUserInformationSP>> getAllCraftsmanInformation()
        {
            return  await _craftsmanInformationRepository.getAllCraftsmanInformation();
        }
        public async Task<CraftsmanUserInformationSP> getCraftsmanInformation(Guid id)
        {

            return await _craftsmanInformationRepository.getCraftsmanInformation(id);
        }
        public async Task<GetUserInformationResponse> GetUserInformation()
        {
            var userId = _authenticationService.GetCurrentUserId();
            var user = await _userRepository.GetUserProfile(userId);
            if(user == null)
            {
                throw new Exception("Unauthorized");

            }
            var craftmanInformation = await _craftsmanInformationRepository.getUserInformation(userId);
            return new GetUserInformationResponse
            {
                UserName = user.UserName,
                FullName = user.FullName,
                ProfileImage = user.ProfileImage,
                Sector = craftmanInformation?.Sector,
                Speed = craftmanInformation?.Speed,
                Note = craftmanInformation?.Note,
                Region = craftmanInformation?.Region,
                PhoneNumber = user.PhoneNumber
            };
        }
        public async Task<CraftsmanInformationSP> GetCraftsmanInformationById(Guid id)
        {
           return await _craftsmanInformationRepository.GetCraftsmanInformationById(id);
        }
        public async Task<List<CraftsmanUserInformationSP>> GetCraftsmanBySector(SectorEnum sector)
        {

            return await _craftsmanInformationRepository.GetCraftsmanBySector(sector);
        }

        public async Task<List<GetImageListResponse>> GetImageGalleryList(int? requestId)
        {

            var userId = _authenticationService.GetCurrentUserId();
            return await _imageGalleryRepository.GetImageGalleryList(userId, requestId);
        }

        public async Task<bool> AddImageForSpecificRequest(AddImageForSpecificRequestRequest request)
        {
            var userId = _authenticationService.GetCurrentUserId();
            await AddImageList(request.ImageList, userId, request.Title, request.RequestId);
            return true;
        }

        public async Task<bool> DeleteImage(int id)
        {

            return await _imageGalleryRepository.DeleteImage(id);
        }
        
        private async Task AddImageList(List<string> list, Guid userId, string title, int? requestId=0)
        {

            if (list.Count == 0)
            {
                return;
            }


            var data = new ImageGalleryGroup
            {
                GroupTitle = title,
                userId = userId,
                RequestId = requestId
            };

            var groupId = await _imageGalleryRepository.AddImageGalleryGroup(data);
            var imageGallery = new List<ImageGalleryModel>();
            list.ForEach(async t =>
            {
                var filename = await _uploadService.SaveImageAsync(t, "./Upload/ImageGallery");
                imageGallery.Add(new ImageGalleryModel
                {
                    ImageName = filename,
                    ImageGalleryGroupId = groupId
                });
            });
            await _imageGalleryRepository.AddImageList(imageGallery);
        }


    }
}