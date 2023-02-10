﻿using WebApplication1.Models;

namespace Backend.Dtos.Project
{
    public class GetProjectDetailsById
    {
       
        public string ProjectName { get; set; }
        public int Space { get; set; }
        public DateTime StartDate { get; set; }
        public Region Region { get; set; }
        public List<CraftsmanInformationDto> craftsmans { get; set; }
    }
}
