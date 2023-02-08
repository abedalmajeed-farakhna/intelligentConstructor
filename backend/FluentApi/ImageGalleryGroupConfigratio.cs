using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Models;

namespace WebApplication1.FluentApi
{
    public class ImageGalleryGroupConfigratio : IEntityTypeConfiguration<ImageGalleryGroup>
    {
        public void Configure(EntityTypeBuilder<ImageGalleryGroup> builder)
        {
            builder.ToTable("ImageGalleryGroup");
            builder.HasKey(x => x.Id);
        }
    }
}
