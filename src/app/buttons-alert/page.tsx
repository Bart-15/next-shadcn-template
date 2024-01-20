'use client';
import { useRouter } from 'next/navigation';

import {
  errorToast,
  infoToast,
  successToast,
  warningToast,
} from '@/components/framework/toast';
import { Heading } from '@/components/framework/typography';
import { Icons } from '@/components/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Buttons = () => {
  const router = useRouter();

  return (
    <>
      <div className='container'>
        <Button
          className={cn(
            buttonVariants({ variant: 'destructive', className: 'my-10' }),
          )}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
        <Heading as='h1' className='my-10'>
          Buttons w/ Alert
        </Heading>
        <div className='mb-6 flex flex-wrap gap-8'>
          <Button className={cn(buttonVariants({ variant: 'default' }))}>
            Default
          </Button>
          <Button className={cn(buttonVariants({ variant: 'secondary' }))}>
            Secondary
          </Button>
          <Button className={cn(buttonVariants({ variant: 'destructive' }))}>
            Destructive
          </Button>
          <Button className={cn(buttonVariants({ variant: 'ghost' }))}>
            Ghost
          </Button>
          <Button
            className={cn(buttonVariants({ variant: 'default' }))}
            isLoading={true}
          >
            On Submit with Loading
          </Button>
          <Button
            className={cn(buttonVariants({ variant: 'destructive' }))}
            onClick={() =>
              errorToast({
                message: 'Ooops, something went wrong',
                description: 'Please try again later',
              })
            }
          >
            <Icons.error className='mr-1 h-4 w-4' /> With Icon
          </Button>
          <Button
            className={cn(buttonVariants({ variant: 'sky' }))}
            onClick={() =>
              infoToast({
                message: 'This is a info toast message',
              })
            }
          >
            Info
          </Button>
          <Button
            className={cn(buttonVariants({ variant: 'success' }))}
            onClick={() =>
              successToast({
                message: 'User updated successfully!',
              })
            }
          >
            <Icons.success className='mr-1 h-4 w-4' />
            Success
          </Button>
          <Button
            className={cn(buttonVariants({ variant: 'warning' }))}
            onClick={() =>
              warningToast({
                message: 'Warning message here',
              })
            }
          >
            <Icons.warning className='mr-1 h-4 w-4' />
            Warning
          </Button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
