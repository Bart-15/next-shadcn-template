'use client';

import { useRouter } from 'next/navigation';

import { Heading, Text } from '@/components/framework/typography';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TypoprahyPage = () => {
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
      </Button>
      <Heading as='h1' className='my-10 text-center font-bold'>
        Headings
      </Heading>
      <div className='mb-12 flex flex-col items-center justify-center gap-2'>
        <Heading as='h1'>H1</Heading>
        <Heading as='h2'>H2</Heading>
        <Heading as='h3'>H3</Heading>
        <Heading as='h4'>H4</Heading>
        <Heading as='h5'>H5</Heading>
        <Heading as='h6'>H6</Heading>
      </div>
      <Heading as='h1' className='my-10 text-center font-bold'>
        Paragraph
      </Heading>
      <div className='mb-4 flex flex-col items-center justify-center gap-2'>
        <Text as='p'>This is a paragraph {'<p />'}</Text>
        <Text as='pre'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. {'<pre />'}
        </Text>
        <Text as='a' href='#' className='text-blue-500 underline'>
          This is a Link {'<a />'}
        </Text>
        <Text as='span'>This is a span {'<span />'}</Text>
        <Text as='small'>This is a small {'<small />'}</Text>
      </div>
    </div>
  );
};

export default TypoprahyPage;
