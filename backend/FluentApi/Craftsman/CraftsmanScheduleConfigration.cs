using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models.Craftsman;

namespace WebApplication1.FluentApi.Craftsman
{
    public class CraftsmanScheduleConfigration : IEntityTypeConfiguration<CraftsmanSchedule>
    {
        public void Configure(EntityTypeBuilder<CraftsmanSchedule> builder)
        {
            builder.ToTable("CraftsmanSchedule");
            builder.HasKey(x => x.Id);
        }
    }
}
