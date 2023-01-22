using Backend.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.Constructor
{
    public class GetConstructorInformationResponse
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string? ProfileImage { get; set; }
        public string? Note { get; set; }
        public int? Capacity { get; set; }


    }
}
