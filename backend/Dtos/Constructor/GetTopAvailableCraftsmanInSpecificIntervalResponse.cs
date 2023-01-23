using Backend.Dtos.Constructor;

namespace WebApplication1.Dtos.Constructor
{
    public class GetTopAvailableCraftsmanInSpecificIntervalResponse
    {
        public List<GetTopAvailableCraftsmanInSpecificInterval> TopBuilders { get; set; }
        public List<GetTopAvailableCraftsmanInSpecificInterval> TopHousePainter { get; set; }



    }
}