import { InputPassword } from '@/components/framework/forms/input-password';
import { Heading } from '@/components/framework/typography';

const InputPasswordType = () => {
  return (
    <>
      <Heading as='h3' className='my-10 text-center font-bold'>
        Input type password
      </Heading>
      <div className='my-3 flex flex-col gap-2'>
        <InputPassword type='password' placeholder='Password' />
        <InputPassword type='password' placeholder='Confirm Password' />
      </div>
    </>
  );
};

export default InputPasswordType;
