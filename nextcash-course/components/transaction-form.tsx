'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const transactionFormSchema = z.object({
	transactionType: z.enum(['income', 'expense']),
	categoryId: z.coerce.number().positive('Please select a category'),
	transactionDate: z.coerce
		.date()
		.max(addDays(new Date(), 1), 'Transaction date cannot be in the future'),
	amount: z.coerce.number().positive('Amount be greater than zero'),
	description: z
		.string()
		.min(3, 'Description must contain at the least 3 characters')
		.max(300, 'Description must contain up to 300 characters'),
});

const TransactionForm = () => {
    const form = useForm<z.infer<typeof transactionFormSchema>>({
        resolver: zodResolver(transactionFormSchema),
        defaultValues:{
            amount: 0,
            categoryId: 0,
            description: '',
            transactionDate: new Date(),
            transactionType: 'income'
        }
    })

	return <div></div>;
};

export default TransactionForm;
