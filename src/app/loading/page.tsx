'use client';

import { useRouter } from 'next/navigation';

import { LoadingSpinner } from '@/components/framework/loading-spinner';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Loading = () => {
  const router = useRouter();

  return (
    <div className='container'>
      <Button
        className={cn(
          buttonVariants({ variant: 'destructive', className: 'my-10' }),
        )}
        onClick={() => router.back()}
      >
        Go Back
      </Button>{' '}
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
