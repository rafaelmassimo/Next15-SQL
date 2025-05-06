'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format, setDate } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { date, z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cn } from '@/lib/utils';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import { Input } from './ui/input';

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
		defaultValues: {
			amount: 0,
			categoryId: 0,
			description: '',
			transactionDate: new Date(),
			transactionType: 'income',
		},
	});

	const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<fieldset className="grid grid-cols-2 gap-y-5 gap-x-5">
					<FormField
						control={form.control}
						name="transactionType"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Transaction Type</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} value={field.value}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="income">Income</SelectItem>

												<SelectItem value="expense">Expense</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} value={field.value.toString()}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent></SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name="transactionDate"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Transaction Date</FormLabel>
									<FormControl>
										<Popover>
											<PopoverTrigger asChild>
												<Button
												variant={'outline'}
													className={cn(
														'w-full justify-start text-left font-normal',
														!field.value && 'text-muted-foreground',
													)}
												>
													<CalendarIcon className="mr-2 h-4 w-4" />
													{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0">
												<Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus 
													disabled={{
														after: new Date()
													}}
														/>
											</PopoverContent>
										</Popover>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name="amount"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Amount</FormLabel>
									<FormControl>
										<Input {...field} type='number'/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

				</fieldset>
				<fieldset className='mt-5 flex flex-col gap-5'>
				<FormField
						control={form.control}
						name="description"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
									<Input {...field} type='text'/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<Button type='submit'>
						Submit
					</Button>
				</fieldset>
			</form>
		</Form>
	);
};

export default TransactionForm;
