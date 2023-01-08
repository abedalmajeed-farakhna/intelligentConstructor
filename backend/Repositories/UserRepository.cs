using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace Backend.Repositories
{
    public class UserRepository:IUserRepository
    {

        private ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<User?> Login(LoginRequest request)
        {

            var asd = await _context.userProfile.FirstOrDefaultAsync(t => t.UserName == request.Username);
            return new User
            {
                UserName = asd.UserName,
                Password = "aa"

            };
        }

        public async Task<bool> UpdateUserProfile (Guid userId, string profileImage)
        {
            var user = await _context.userProfile.FirstOrDefaultAsync(t=>t.Id== userId.ToString());
            user.ProfileImage = profileImage;
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
