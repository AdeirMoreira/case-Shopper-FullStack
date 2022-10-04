import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createStock1664898441489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Stock',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'qty_stock',
                        type: 'int',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Stock')
    }
}
