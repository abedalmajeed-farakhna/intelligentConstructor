﻿using Backend.Dtos;
using Backend.Dtos.Craftsman;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using WebApplication1.Data;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class CraftsmanInformationRepository : ICraftsmanInformationRepository
    {

        private ApplicationDbContext _context;
        public CraftsmanInformationRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<CraftsmanInformation?> getUserInformation(Guid userId)
        {

            return await _context.craftsmanInformation.FirstOrDefaultAsync(t => t.UserId == userId);

        }

        public async Task<bool> AddOrUpdateUserInformation(UpdateInformationRequest request, Guid userID)
        {

            var userInformation = await getUserInformation(userID);
            if(userInformation == null)
            {
                userInformation = new CraftsmanInformation
                {
                    UserId = userID,
                    CraftsManType = request.CraftsManType,
                     Note= request.Note,
                      Speed= request.Speed
                };
                await _context.craftsmanInformation.AddAsync(userInformation);
            }
            else
            {
                userInformation.CraftsManType = request.CraftsManType;
                userInformation.Note = request.Note;
                userInformation.Speed = request.Speed;
            }

            _context.SaveChanges();

            return true;
        }
    }
}
