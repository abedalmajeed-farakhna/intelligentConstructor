using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Dtos.ImageGallery
{
    public class UploadImagesRequest
    {

        public List<string> ImageList { get; set; }


    }
}
