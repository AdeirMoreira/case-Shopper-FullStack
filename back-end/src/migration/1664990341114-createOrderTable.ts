import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPurchaseTable1664990341114 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "Purchase",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
						isUnique: true,
					},
					{
						name: "clientName",
						type: "varchar",
					},
					{
						name: "totalPrice",
						type: "float",
					},
					{
						name: "productsPurchased",
						type: "text",
					},
					{
						name: "deliveryDate",
						type: "date",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("Purchase");
	}
}
