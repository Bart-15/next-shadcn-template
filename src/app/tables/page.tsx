import Link from 'next/link';

import { defaultColumns } from '@/components/framework/table/advance/columns';
import { DataTable as TableWithSearch } from '@/components/framework/table/advance/data-table';
import { Heading } from '@/components/framework/typography';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

async function getUsers(endpoint: string) {
  const response = await fetch(
    `https://65ade6b01dfbae409a738a43.mockapi.io/api/v1/${endpoint}`,
  );

  const data = await response.json();
  return data;
}

const TablePage = async () => {
  const users = await getUsers('users');

  return (
    <div className='container'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'destructive', className: 'my-10' }),
        )}
      >
        Go Back
      </Link>
      <Heading as='h3' className='my-4'>
        Advanced Table
      </Heading>
      <TableWithSearch columns={defaultColumns} data={users} />
    </div>
  );
};

export default TablePage;
