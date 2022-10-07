import * as fs from 'fs';
import * as csv from 'fast-csv';
import { AppDataSource } from '../../data-source/data-source';
import { Stock } from '../entity/Stock';
import IDGenerator from '../../Services/IDGenerator';

const read = () => {
    const products = []
    fs.createReadStream('./src/stock/script/products.csv')
    .pipe(csv.parse({ headers:true }))
    .on('error', error => console.error(error))
    .on('data', row => products.push(row))
    .on('end', async () => {
        try {
            await AppDataSource.initialize()
            const repository = AppDataSource.getRepository(Stock)
            const promisesArray = products.map(product=> {
                const id = IDGenerator.generateId()
                const newproduct = new Stock(
                    id,
                    product.name,
                    product.price,
                    product.qty_stock
                )
                return repository.save(newproduct)
            })
            const resultDb = await Promise.all(promisesArray)
            console.log(resultDb)
        } catch (error) {
            console.log(error)
        } finally {
            await AppDataSource.destroy()
        }
    }) 
}

read()





