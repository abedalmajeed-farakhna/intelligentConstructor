using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models;

namespace WebApplication1.FluentApi.Craftsman
{
    public class CraftsmanInformationConfigration : IEntityTypeConfiguration<CraftsmanInformation>
    {
        public void Configure(EntityTypeBuilder<CraftsmanInformation> builder)
        {
            builder.ToTable("CraftsmanInformation");
            builder.HasKey(x => x.UserId);
        }
    }
}
