// @ts-ignore - drizzle-kit type will be available at runtime
export default {
  schema: "./shared/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
  verbose: true,
  strict: true,
};
