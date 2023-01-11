using Backend.Enums;

namespace Backend.Dtos
{
    public class LoginResponse
    {
        public bool isAuthontecated { get; set; }
        public string? FullName { get; set; }
        public userTypeEnum UserType { get; set; }
        public string? ProfileImage { get; set; }
    }
}
