/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/named
import { ColumnDef } from '@tanstack/react-table';
import { type Table } from '@tanstack/react-table';
import { ChangeEvent, SetStateAction } from 'react';

import { Icons } from '@/components/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Option } from '@/types/global.types';

interface DataTableFilterOptionsProps<TData, TValue> {
  table: Table<TData>;
  column?: ColumnDef<TData, TValue>[];
  title?: string;
  options: Option[];
  filterBy: string;
  clear: () => void;
  globalFilter: string;
  setGlobalFilter: (value: SetStateAction<string>) => void;
  setFilterBy: (value: SetStateAction<string>) => void;
}
export function DataTableFilterOptions<TData, TValue>({
  table,
  column,
  title,
  options,
  filterBy,
  globalFilter,
  setGlobalFilter,
  setFilterBy,
  clear,
}: DataTableFilterOptionsProps<TData, TValue>) {
  return (
    <div className='flex items-center py-4'>
      <div className='flex items-center gap-2'>
        <Input
          placeholder={`Search by ${filterBy ? filterBy : ''}...`}
          value={
            (filterBy
              ? (table.getColumn(filterBy)?.getFilterValue() as string)
              : globalFilter) || ''
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            filterBy
              ? table.getColumn(filterBy)?.setFilterValue(event.target.value)
              : setGlobalFilter(event.target.value)
          }
          className='max-w-sm'
        />
        <Select value={filterBy} onValueChange={(value) => setFilterBy(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter by' />
          </SelectTrigger>
          <SelectContent>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {(filterBy || globalFilter) && (
          <Button
            className={cn(
              buttonVariants({
                variant: 'secondary',
                className: 'transition duration-150 ease-in-out',
              }),
            )}
            onClick={clear}
          >
            <Icons.error className='mr-1 h-4 w-4' />
            Clear
          </Button>
        )}
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='terms'
            onCheckedChange={(event) =>
              table.getColumn('active')?.setFilterValue(event)
            }
          />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Active
          </label>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='ml-auto'>
            Hide Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
