import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { categoriesTable } from './db/schema';

dotenv.config({
	path: '.env.local',
});

const db = drizzle(process.env.DATABASE_URL!);

// So, categoriesSeedData is an array of objects that conform to the structure defined by categoriesTable.$inferInsert. This ensures type safety when inserting data into the database.
const categoriesSeedData: (typeof categoriesTable.$inferInsert)[] = [
	{
		name: 'Salary',
		type: 'income',
	},
	{
		name: 'Rental Income',
		type: 'income',
	},
	{
		name: 'Business Income',
		type: 'income',
	},
	{
		name: 'Investments',
		type: 'income',
	},
	{
		name: 'Other',
		type: 'income',
	},
	{
		name: 'Housing',
		type: 'expense',
	},
	{
		name: 'Transport',
		type: 'expense',
	},
	{
		name: 'Food & Groceries',
		type: 'expense',
	},
	{
		name: 'Health',
		type: 'expense',
	},
	{
		name: 'Entertainment & Leisure',
		type: 'expense',
	},
	{
		name: 'Other',
		type: 'expense',
	},
];

async function main() {
	await db.insert(categoriesTable).values(categoriesSeedData);
}
main();
