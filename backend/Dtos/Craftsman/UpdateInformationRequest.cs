using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Craftsman
{
    public class UpdateInformationRequest
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Note { get; set; }
        [Required]
        public int Speed { get; set; }
        [Required]
        public SectorEnum Sector { get; set; }

        [Required]
        public int Region { get; set; }

        public List<string> ImageList { get; set; }
    }
}
