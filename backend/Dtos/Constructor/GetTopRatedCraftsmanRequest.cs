using Backend.Enums;

namespace WebApplication1.Dtos.Constructor
{
    public class GetTopRatedCraftsmanRequest
    {

        public SectorEnum Sector { get; set; }

        public int Region { get; set; }

    }
}
