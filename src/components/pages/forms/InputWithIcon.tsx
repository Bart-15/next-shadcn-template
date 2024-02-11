import { InputWithIconRight } from '@/components/framework/forms/input-with-icon-right';
import { Heading } from '@/components/framework/typography';
import { Icons } from '@/components/Icons';

const InputWithIcon = () => {
  return (
    <>
      <Heading as='h3' className='my-10 text-center font-bold'>
        Input with icons / right
      </Heading>
      <div className='my-3 flex flex-col gap-2'>
        <InputWithIconRight
          placeholder='Input With Icon, user'
          type='text'
          iconRight={<Icons.user className='h-4 w-4' />}
        />
        <InputWithIconRight
          placeholder='Input With Icon, search'
          type='text'
          iconRight={<Icons.search className='h-4 w-4' />}
        />
      </div>
    </>
  );
};

export default InputWithIcon;
