using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class RatingDetailsRequest
    {
        
        [Required]
        public int RequestId   { get; set; }
        [Required]
        public int RateValue { get; set; }

        


    }
}
