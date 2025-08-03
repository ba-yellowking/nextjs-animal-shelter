import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "db/animals.db");
const db = new Database(dbPath);

export default db;
