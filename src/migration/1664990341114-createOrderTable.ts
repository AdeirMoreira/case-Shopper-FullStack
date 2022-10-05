import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createOrderTable1664990341114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Order',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'clientId',
                        type: 'int',
                    },
                    {
                        name: 'clientName',
                        type: 'varchar',
                    },
                    {
                        name: 'totalPrice',
                        type: 'int',
                    },
                    {
                        name: 'productsList',
                        type: 'text',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Order')
    }

}
