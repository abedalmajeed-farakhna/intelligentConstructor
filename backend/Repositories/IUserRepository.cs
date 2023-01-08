﻿using Backend.Dtos;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public interface IUserRepository
    {
        Task<User?> Login(LoginRequest request);
        Task<UserProfile?> GetUserProfile(Guid userId);
        Task<bool> UpdateUserProfile(Guid userId, string profileImage);
       /* Task<bool> SignUpAsync(SignUpRequest request);
        Task<bool> UpdateUserInformation(User user);*/
    }
}
