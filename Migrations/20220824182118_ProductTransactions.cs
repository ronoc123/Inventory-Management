using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Inventory_Management.Migrations
{
    public partial class ProductTransactions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductTransactionId",
                table: "Inventories",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ProductTransactions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    Activity = table.Column<int>(type: "int", nullable: false),
                    QuantityBefore = table.Column<int>(type: "int", nullable: false),
                    QuantityAfter = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTransactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductTransactions_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Inventories_ProductTransactionId",
                table: "Inventories",
                column: "ProductTransactionId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTransactions_ProductId",
                table: "ProductTransactions",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Inventories_ProductTransactions_ProductTransactionId",
                table: "Inventories",
                column: "ProductTransactionId",
                principalTable: "ProductTransactions",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inventories_ProductTransactions_ProductTransactionId",
                table: "Inventories");

            migrationBuilder.DropTable(
                name: "ProductTransactions");

            migrationBuilder.DropIndex(
                name: "IX_Inventories_ProductTransactionId",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "ProductTransactionId",
                table: "Inventories");
        }
    }
}
