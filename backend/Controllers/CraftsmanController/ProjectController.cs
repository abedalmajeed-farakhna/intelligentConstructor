﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services;
using Backend.Dtos.Craftsman;
using WebApplication1.Models.Craftsman;
using Backend.Enums;
using Microsoft.Identity.Client;
using Backend.Dtos.Constructor;
using Backend.Dtos.Project;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]

    public class ProjectController : Controller
    {


        private readonly ICraftsmanScheduleService _craftsmanScheduleService;


        public ProjectController(ICraftsmanScheduleService craftsmanScheduleService)
        {
            _craftsmanScheduleService = craftsmanScheduleService;

        }

        [HttpPost]
        public async Task<bool> SendRequest([FromBody] SendRequestDto request )
        {
             return await _craftsmanScheduleService.SendRequest(request);
        }
        [HttpPost]
        public async Task<bool> AcceptRequest ([FromBody] AcceptRequestDto request)
        {
            return await _craftsmanScheduleService.AcceptRequest(request.RequestId);
        }
        [HttpPost]
        public async Task<bool> RejectRequest([FromBody] RejectRequestDto request)
        {
            return await _craftsmanScheduleService.RejectRequest(request.RequestId);
        }
        [HttpPost]
        public async Task<bool> CancelRequest([FromBody] CancelRequestDto request)
        {
            return await _craftsmanScheduleService.CancelRequest(request.RequestId);
        }
        [HttpGet]
        public async Task<List<GetSentRequestListResponseDto>> GetSentRequestList( )
        {
            return await _craftsmanScheduleService.GetSentRequestList();
        } 
        public async Task<List<CraftsmanSchedule>> GetCraftsmanRequestList()
        {
            return await _craftsmanScheduleService.GetCraftsmanRequestList();
        }

        public async Task<List<GetReceivedRequestListSP>> GetReceivedRequestList()
        {
            return await _craftsmanScheduleService.GetReceivedRequestList();
        }
        
        
        [HttpPost]
        public async Task<bool> StartWorking([FromBody] StartWorkingRequestDto request)
        {
            return await _craftsmanScheduleService.StartWorking(request.RequestId);
        }

        [HttpPost]
        public async Task<bool> DoneWorking([FromBody] DoneWorkingRequestDto request)
        {
            return await _craftsmanScheduleService.DoneWorking(request.RequestId);
        }
    }

}
