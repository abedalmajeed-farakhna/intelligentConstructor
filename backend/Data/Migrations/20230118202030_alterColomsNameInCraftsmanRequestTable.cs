using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Data.Migrations
{
    /// <inheritdoc />
    public partial class alterColomsNameInCraftsmanRequestTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "To",
                table: "CraftsmanSchedule",
                newName: "ToDate");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "CraftsmanSchedule",
                newName: "RequestStatus");

            migrationBuilder.RenameColumn(
                name: "Frome",
                table: "CraftsmanSchedule",
                newName: "FromeDate");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "CraftsmanSchedule",
                newName: "RequestDescription");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ToDate",
                table: "CraftsmanSchedule",
                newName: "To");

            migrationBuilder.RenameColumn(
                name: "RequestStatus",
                table: "CraftsmanSchedule",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "RequestDescription",
                table: "CraftsmanSchedule",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "FromeDate",
                table: "CraftsmanSchedule",
                newName: "Frome");
        }
    }
}
