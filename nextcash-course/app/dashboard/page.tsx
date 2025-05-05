import Link from 'next/link';
import React from 'react';

const DashboardPage = () => {
	return <Link href={'/dashboard/transactions/new'}>New Transaction</Link>;
};

export default DashboardPage;
