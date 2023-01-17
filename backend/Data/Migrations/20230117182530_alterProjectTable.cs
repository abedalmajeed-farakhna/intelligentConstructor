using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Data.Migrations
{
    /// <inheritdoc />
    public partial class alterProjectTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CraftsmanProject");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "CraftsmanSchedule");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "CraftsmanSchedule",
                newName: "ToUserId");

            migrationBuilder.AddColumn<Guid>(
                name: "Description",
                table: "CraftsmanSchedule",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "FromUserId",
                table: "CraftsmanSchedule",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "CraftsmanSchedule");

            migrationBuilder.DropColumn(
                name: "FromUserId",
                table: "CraftsmanSchedule");

            migrationBuilder.RenameColumn(
                name: "ToUserId",
                table: "CraftsmanSchedule",
                newName: "UserId");

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "CraftsmanSchedule",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CraftsmanProject",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectName = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CraftsmanProject", x => x.Id);
                });
        }
    }
}
