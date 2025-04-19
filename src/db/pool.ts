import { Pool } from "pg";

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT ? process.env.PORT : "5432"),
});

export default pool;
