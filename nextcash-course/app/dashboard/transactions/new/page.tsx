import TransactionForm from '@/components/transaction-form';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const NewTransactionPage = () => {
	return (
		<div className="max-w-screen-xl mx-auto py-10">
			<Breadcrumb>
				<BreadcrumbList>
					{/* Dashboard */}
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href={'/dashboard'}>Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />

					{/* Transactions */}
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href={'/dashboard/transactions'}>Transactions</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />

					{/* New Transaction*/}
					<BreadcrumbItem>
						<BreadcrumbPage>New Transaction</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<Card className="mt-4 max-w-screen-md">
				<CardHeader>
					<CardTitle>
                        New Transaction
                    </CardTitle>
                    <CardContent>
                        <TransactionForm/>
                    </CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default NewTransactionPage;
