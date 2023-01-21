using Backend.Dtos;
using Backend.Dtos.Craftsman;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Data.Migrations;
using WebApplication1.Dtos.Settings;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class ConstructorRepository : IConstructorRepository
    {

        private ApplicationDbContext _context;
        public ConstructorRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<GetConstructorInformationResponse?> ConstructorInformation(Guid userId)
        {

            var userIdParameter = new SqlParameter("@userId", userId);

            string sql = "EXECUTE [dbo].[GetConstructorInformationByUserId_SP]  @userId={0}";
            var asd = await _context.GetConstructorInformationSP.FromSqlRaw(sql, userIdParameter).ToListAsync();
            return (await _context.GetConstructorInformationSP.FromSqlRaw(sql, userIdParameter).ToListAsync()).FirstOrDefault();
        }
        /*

          public async Task<bool> UpdateConstructorInformation (Guid userId, UpdateUserInformationRequest request)
          {
              var user = await _context.userProfile.FirstOrDefaultAsync(t => t.Id == userId.ToString());
              user.FullName = request.FullName;
              _context.SaveChanges();
              return true;
          }

          public async Task <UserProfile?> GetUserProfile(Guid userId)
          {
              return _context.userProfile.FirstOrDefault(t=> t.Id == userId.ToString());
          }

       /*   public async Task<bool> SignUpAsync(SignUpRequest request)
          {
              var user = new User // use mapper
              {
                  UserId =Guid.NewGuid(),
                  UserName = request.Username,
                  Password = request.Password,
                  FullName = request.FullName,
                  UserType = (int)request.UserType
              };


              var test =  await _context.Users.FirstOrDefaultAsync();
              await _context.Users.AddAsync(user);
              _context.SaveChanges();
              return true;
          }*/



        /* public async Task<bool> UpdateUserInformation(User user)
         {
             var item =  await _context.Users.FirstOrDefaultAsync(t => t.UserId == user.UserId);
             if (item == null)
             {
                 throw new Exception("user nof found");
             }
             item.FullName = user.FullName;
             item.Note= user.Note;

             _context.SaveChanges();
             return true;
         }*/
    }
}
