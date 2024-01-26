/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
'use client';

declare module '@tanstack/table-core' {
  interface FilterFns {
    filterByFuelType: FilterFn<unknown>;
  }
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { createColumnHelper, FilterFn } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  lastSeen: string;
  carFuelType: string;
};

export type UserKey = keyof User;

export const columnHelper = createColumnHelper<User>();

export const defaultColumns = [
  // Display Columns
  columnHelper.accessor('name', {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <Icons.arrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  }),
  columnHelper.accessor('email', {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <Icons.arrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  }),
  columnHelper.accessor('lastSeen', {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Last Seen
          <Icons.arrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('lastSeen'));
      const formatted = date.toLocaleString();
      return <div className='font-medium'>{formatted}</div>;
    },
  }),
  columnHelper.accessor('carFuelType', {
    filterFn: 'filterByFuelType' as any,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Fuel Type
          <Icons.arrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='cursor-pointer rounded-sm border bg-slate-50 px-2 py-3 shadow-sm	'
            align='end'
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user details</DropdownMenuItem>
            <DropdownMenuItem>Delete User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
];

export const filterOptions = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'lastSeen',
    label: 'Last Seen',
  },
  {
    id: 'carFuelType',
    label: 'Car Fuel',
  },
] as const;
