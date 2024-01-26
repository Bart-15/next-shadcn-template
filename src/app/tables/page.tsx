import { defaultColumns } from '@/components/framework/table/advance/columns';
import { DataTable as TableWithSearch } from '@/components/framework/table/advance/data-table';
import { simpleTableColumns } from '@/components/framework/table/simple-table/columns';
import { DataTable as SimpleTable } from '@/components/framework/table/simple-table/data-table';
import { withPaginationColumns } from '@/components/framework/table/with-pagination/columns';
import { DataTable as TableWithPagination } from '@/components/framework/table/with-pagination/data-table';
import { Heading } from '@/components/framework/typography';

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
      <Heading as='h1' className='my-2 text-center font-bold'>
        Tables
      </Heading>

      {/* Simple Table */}
      <Heading as='h3' className='mb-4'>
        Simple Table
      </Heading>
      <SimpleTable columns={simpleTableColumns} data={users} />

      {/* With Pagination */}
      <Heading as='h3' className='my-4'>
        With Pagination
      </Heading>
      <TableWithPagination columns={withPaginationColumns} data={users} />

      <Heading as='h3' className='my-4'>
        Advanced Table
      </Heading>
      <TableWithSearch columns={defaultColumns} data={users} />
    </div>
  );
};

export default TablePage;
