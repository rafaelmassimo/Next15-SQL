import { drizzle } from 'drizzle-orm/neon-http';
const db = drizzle(process.env.DATABASE_URL!);

export {db};

// import {db} from "@/db"

// db.select example of usage