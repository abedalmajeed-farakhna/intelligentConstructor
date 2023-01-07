
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class User
{
    public Guid UserId { get; set; }

    public string FullName { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }
    public string? Note { get; set; }
    public int UserType { get; set; }

}
