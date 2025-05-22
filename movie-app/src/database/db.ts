const Database = require('better-sqlite3');
const db: any = new Database('movies.db', { verbose: console.log });

// Optional: ensure table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    director TEXT NOT NULL,
    year INTEGER NOT NULL
  );
`);

export default db;