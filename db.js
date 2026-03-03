import { createPool  } from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

export const pool = createPool({   
host: 'DB_HOST',
user: 'DB_USER',
password: 'DB_PASSWORD',
database: 'DB_DATABASE',
port: 'DB_PORT'
});