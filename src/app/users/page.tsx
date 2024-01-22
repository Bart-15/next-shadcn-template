import { Heading } from '@/components/framework/typography';

import { columns } from './columns';
import { DataTable } from './data-table';

async function getUsers(endpoint: string) {
  const response = await fetch(
    `https://65ade6b01dfbae409a738a43.mockapi.io/api/v1/${endpoint}`,
  );

  const data = await response.json();
  return data;
}

export default async function Page() {
  const users = await getUsers('users');

  return (
    <section className='py-4'>
      <div className='container'>
        <Heading as='h1' className='font-bold'>
          All Users
        </Heading>
        <DataTable columns={columns} data={users} />
      </div>
    </section>
  );
}
