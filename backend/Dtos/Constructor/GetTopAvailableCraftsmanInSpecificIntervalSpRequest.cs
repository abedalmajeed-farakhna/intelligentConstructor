using Backend.Enums;

namespace Backend.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificIntervalSpRequest
    {
        public DateTime fromDate { get; set; }
        public DateTime toDate { get; set; }
        public SectorEnum Sector { get; set; }

    }
}
