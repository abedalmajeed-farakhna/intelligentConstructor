using Backend.Enums;

namespace Backend.Dtos
{
    public class LoginResponse
    {
        public bool isAuthontecated { get; set; }
        public string FullName { get; set; }
        public userTypeEnum userType { get; set; }
       // public Guid Id { get; set; }
    }
}
