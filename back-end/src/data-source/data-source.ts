import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Stock } from "../stock/entity/Stock";
import { Purchase } from "../purchase/entity/Purchase";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Purchase, Stock],
  migrations: ["src/migration/*.ts"],
});
