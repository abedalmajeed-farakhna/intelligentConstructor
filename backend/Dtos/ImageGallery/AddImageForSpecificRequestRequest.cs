using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Dtos.ImageGallery
{
    public class AddImageForSpecificRequestRequest
    {

        public string Title { get; set; }
        public int RequestId { get; set; }
        public List<string> ImageList { get; set; }


    }
}
