namespace WebApplication1.Models;

public partial class ImageGalleryGroup
{
    public int Id { get; set; }

    public string GroupTitle { get; set; }
    public Guid userId { get; set; }
    public int? RequestId { get; set; }

}
