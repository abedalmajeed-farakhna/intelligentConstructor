using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Constructor
{
    public class CraftsmanDataDto
    {
        public Guid UserId { get; set; }
        
        public DateTime StratDate { get; set; }
        public DateTime EndDate { get; set; }


    }
}
