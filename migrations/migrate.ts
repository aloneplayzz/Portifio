import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import { db } from '../server/db';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureMigrationDirectories() {
  const dirs = ['sql', 'meta'];
  for (const dir of dirs) {
    const dirPath = path.resolve(__dirname, dir);
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }
  }

  // Ensure _journal.json exists
  const journalPath = path.resolve(__dirname, 'meta', '_journal.json');
  try {
    await fs.access(journalPath);
  } catch {
    await fs.writeFile(journalPath, JSON.stringify({
      version: "5",
      dialect: "pg",
      entries: []
    }, null, 2));
  }
}

async function runMigrations() {
  try {
    console.log('Ensuring migration directories...');
    await ensureMigrationDirectories();

    console.log('Running migrations...');
    await migrate(db, { 
      migrationsFolder: path.resolve(__dirname, 'sql')
    });
    console.log('Migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations().catch((error) => {
  console.error('Migration script failed:', error);
  process.exit(1);
});