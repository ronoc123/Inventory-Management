using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Inventory_Management.Migrations
{
    public partial class Testing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "inventoryId",
                table: "InventoryTransactions",
                newName: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_InventoryTransactions_InventoryId",
                table: "InventoryTransactions",
                column: "InventoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_InventoryTransactions_Inventories_InventoryId",
                table: "InventoryTransactions",
                column: "InventoryId",
                principalTable: "Inventories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventoryTransactions_Inventories_InventoryId",
                table: "InventoryTransactions");

            migrationBuilder.DropIndex(
                name: "IX_InventoryTransactions_InventoryId",
                table: "InventoryTransactions");

            migrationBuilder.RenameColumn(
                name: "InventoryId",
                table: "InventoryTransactions",
                newName: "inventoryId");
        }
    }
}
