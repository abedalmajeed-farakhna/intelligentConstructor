using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class RatingDetailsRequest
    {
        
        [Required]
        public int RequestID   { get; set; }
        [Required]
        public int RateVslue { get; set; }

        


    }
}
