using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models.Constructor;

namespace WebApplication1.FluentApi.Constructor
{
    public class ConstructorInformationConfigration : IEntityTypeConfiguration<ConstructorInformation>
    {
        public void Configure(EntityTypeBuilder<ConstructorInformation> builder)
        {
            builder.ToTable("ConstructorInformation");
            builder.HasKey(x => x.UserId);
        }
    }
}
