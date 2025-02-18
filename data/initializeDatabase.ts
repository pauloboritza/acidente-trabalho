import { type SQLiteDatabase } from 'expo-sqlite'

export default async function initializeDatabase( database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS acidentes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            data JSON,
            createdAt DATETIME
        );
    `)
}