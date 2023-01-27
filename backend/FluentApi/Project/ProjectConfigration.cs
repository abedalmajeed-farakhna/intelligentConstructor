using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models.Constructor;

namespace WebApplication1.FluentApi.Constructor
{
    public class ProjectConfigration : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.ToTable("Project");
            builder.HasKey(x => x.ProjectId);
            builder.Property(f => f.ProjectId)
            .ValueGeneratedOnAdd();
        }
    }
}
