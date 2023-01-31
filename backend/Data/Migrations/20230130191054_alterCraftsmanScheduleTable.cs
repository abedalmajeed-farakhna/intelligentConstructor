using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Data.Migrations
{
    /// <inheritdoc />
    public partial class alterCraftsmanScheduleTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ToDate",
                table: "CraftsmanSchedule",
                newName: "StartDate");

            migrationBuilder.RenameColumn(
                name: "FromeDate",
                table: "CraftsmanSchedule",
                newName: "EndDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartDate",
                table: "CraftsmanSchedule",
                newName: "ToDate");

            migrationBuilder.RenameColumn(
                name: "EndDate",
                table: "CraftsmanSchedule",
                newName: "FromeDate");
        }
    }
}
