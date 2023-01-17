using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Craftsman
{
    public class SendRequestDto
    {
        
        public Guid ToUserId { get; set; }


        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Description { get; set; }


    }
}
