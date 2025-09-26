import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set in .env file");
}

// Add error handling for connection
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

// Test the connection
pool.connect()
  .then(() => console.log('Successfully connected to database'))
  .catch(err => console.error('Failed to connect to database:', err));

export const db = drizzle({ client: pool, schema });
