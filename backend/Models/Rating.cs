
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class Rating
{
    public int Id { get; set; }
    public int RequestId { get; set; }

    public Guid CraftmanUserId { get; set; }

    public Guid UserId { get; set; }

    public int RateValue { get; set; }
   

}
