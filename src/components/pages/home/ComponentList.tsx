import { pages } from '@/lib/const';

import Component from './Component';

const ComponentList = () => {
  return (
    <ul className='max-w-md list-outside list-disc '>
      {pages.map((item) => (
        <Component key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ComponentList;
