namespace WebApplication1.Models;

public partial class ImageGalleryModel
{
    public int Id { get; set; }
    public string ImageName { get; set; }
    public bool? IsDeleted { get; set; } = false;
    public int ImageGalleryGroupId { get; set; }

}
