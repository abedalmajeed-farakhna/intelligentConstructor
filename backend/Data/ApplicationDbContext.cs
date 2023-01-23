using Backend.Dtos.Constructor;
using Backend.Dtos.Craftsman;
using Backend.Dtos.Project;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplication1.FluentApi.Constructor;
using WebApplication1.FluentApi.Craftsman;
using WebApplication1.Models;
using WebApplication1.Models.Constructor;
using WebApplication1.Models.Craftsman;

namespace WebApplication1.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        public virtual DbSet<UserProfile> userProfile { get; set; }
        public virtual DbSet<CraftsmanUserInformationSP> CraftsmanUserInformation { get; set; }
        public virtual DbSet<ConstructorInformation> ConstructorInformation { get; set; }
        public virtual DbSet<CraftsmanInformationSP> GetUserInformationById { get; set; }
        public virtual DbSet<GetConstructorInformationResponse> GetConstructorInformationSP { get; set; }
        public virtual DbSet<GetTopAvailableCraftsmanInSpecificInterval> GetTopAvailableCraftsmanInSpecificInterval { get; set; }

    public virtual DbSet<CraftsmanInformation> craftsmanInformation { get; set; }
        public virtual DbSet<CraftsmanSchedule> craftsmanSchedule { get; set; }

        public virtual DbSet<CraftsmanSchedule> craftsmanProject { get; set; }
        public virtual DbSet<GetGuestRequestListResponseDto> GuestRequestList { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration( new CraftsmanInformationConfigration());
            modelBuilder.ApplyConfiguration(new CraftsmanScheduleConfigration());
            modelBuilder.ApplyConfiguration(new ConstructorInformationConfigration());
            modelBuilder.Entity<CraftsmanUserInformationSP>().HasNoKey().ToView("__notExist");
            modelBuilder.Entity<CraftsmanInformationSP>().HasNoKey().ToView("__notExist2");
            modelBuilder.Entity<GetGuestRequestListResponseDto>().HasNoKey().ToView("__notExist3");
            modelBuilder.Entity<GetConstructorInformationResponse>().HasNoKey().ToView("__notExist4");
            modelBuilder.Entity<GetTopAvailableCraftsmanInSpecificInterval> ().HasNoKey().ToView("__notExist5");

        }
    }
}
