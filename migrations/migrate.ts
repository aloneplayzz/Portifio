import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import { db } from '../server/db';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMigrations() {
  try {
    console.log('Running migrations...');
    await migrate(db, { 
      migrationsFolder: path.resolve(__dirname, 'sql'),
      migrationsTable: 'migrations'
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