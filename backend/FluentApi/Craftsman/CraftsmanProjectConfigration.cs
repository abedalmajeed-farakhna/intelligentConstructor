using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models;
using WebApplication1.Models.Craftsman;

namespace WebApplication1.FluentApi.Craftsman
{
    public class CraftsmanProjectConfigration : IEntityTypeConfiguration<CraftsmanProject>
    {
        public void Configure(EntityTypeBuilder<CraftsmanProject> builder)
        {
            builder.ToTable("CraftsmanProject");
            builder.HasKey(x => x.Id);
        }
    }
}
