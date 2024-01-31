import Database from "better-sqlite3";
const db = new Database("database.db");

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

db.exec(`
CREATE TABLE IF NOT EXISTS messages(
    name TEXT,
    message TEXT
)
`);

insertStatement.run("Spongebob", "I'm Ready!");
insertStatement.run("Patrick", "WEEWOO");
insertStatement.run("Squidward", "OH NO HE'S HOT");
