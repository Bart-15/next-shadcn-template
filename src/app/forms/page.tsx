'use client';

import Link from 'next/link';

import InputPasswordType from '@/components/pages/forms/InputPassword';
import InputWithIcon from '@/components/pages/forms/InputWithIcon';
import LoginCard from '@/components/pages/forms/InputWithValidation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Page = () => {
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

      <InputWithIcon />
      <InputPasswordType />
      <LoginCard />
    </div>
  );
};

export default Page;
