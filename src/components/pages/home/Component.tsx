import Link from 'next/link';

import { Page } from '@/types/global.types';

interface Props {
  item: Page;
}

const Component = ({ item }: Props) => {
  return (
    <li className='my-1 '>
      <Link className='text-1xl hover:to-blue-900' href={item.link}>
        {item.label}
      </Link>
    </li>
  );
};

export default Component;
