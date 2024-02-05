import { Heading } from '@/components/framework/typography';
import ComponentList from '@/components/pages/home/ComponentList';

export default function Home() {
  return (
    <main className='flex flex-col justify-between p-24'>
      <Heading as='h1' className='my-10 text-center'>
        Component List
      </Heading>
      <ComponentList />
    </main>
  );
}
