using Backend.Dtos.Constructor;
using Backend.Enums;
using System.ComponentModel.DataAnnotations;
using WebApplication1.Data.Migrations;
using WebApplication1.Models.Craftsman;

namespace Backend.Dtos.Project
{
    public class CraftsmanScheduleWithUserDetailsSP
    {
       
        public SectorEnum Sector { get; set; }
        public int Id { get; set; }
        public Guid FromUserId { get; set; }
        public Guid ToUserId { get; set; }
        public int? ProjectId { get; set; }
        public string RequestDescription { get; set; }
        public DateTime FromeDate { get; set; }
        public DateTime ToDate { get; set; }
        public ProjectStatusEnum RequestStatus { get; set; }


    }
}
