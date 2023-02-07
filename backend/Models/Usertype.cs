namespace WebApplication1.Models;

public partial class ImageGallery
{
    public int Id { get; set; }
    public Guid UserId { get; set; }
    public string ImageName { get; set; }
    public string? Title { get; set; }
    public int? RequestId { get; set; }
    public bool? IsDeleted { get; set; } = false;

}
