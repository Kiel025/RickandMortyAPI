import { DataSource } from "typeorm"
import { configDotenv } from 'dotenv'
import { Character } from "./model/character.js"

configDotenv.apply()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Character],
    synchronize: false,
    logging: true,
    subscribers: [],
    migrations: ['src\\database\\migrations\\*.js'],
    cli: {
        migrationsDir: 'src\\database\\migrations'
    }
})
