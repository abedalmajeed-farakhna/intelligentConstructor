using Backend.Dtos.Craftsman;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplication1.FluentApi.Craftsman;
using WebApplication1.Models;
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
        public virtual DbSet<CraftsmanInformationSP> GetUserInformationById { get; set; }

        public virtual DbSet<CraftsmanInformation> craftsmanInformation { get; set; }
        public virtual DbSet<CraftsmanSchedule> craftsmanSchedule { get; set; }

        public virtual DbSet<CraftsmanSchedule> craftsmanProject { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration( new CraftsmanInformationConfigration());
            modelBuilder.ApplyConfiguration(new CraftsmanScheduleConfigration());
            modelBuilder.Entity<CraftsmanUserInformationSP>().HasNoKey().ToView("__notExist");
            modelBuilder.Entity<CraftsmanInformationSP>().HasNoKey().ToView("__notExist2");
        }
    }
}
