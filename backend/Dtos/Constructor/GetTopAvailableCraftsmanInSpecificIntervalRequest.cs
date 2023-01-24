using Backend.Enums;

namespace WebApplication1.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificIntervalRequest
    {

        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public SectorEnum Sector { get; set; }

        public int Space { get; set; }

    }
}
