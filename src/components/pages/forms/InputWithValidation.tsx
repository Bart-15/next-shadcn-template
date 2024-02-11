'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { InputPassword } from '@/components/framework/forms/input-password';
import { Heading, Text } from '@/components/framework/typography';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { loginPayload, LoginValidationSchema } from '@/validation/login';

const initFormVal = {
  id: '',
  password: '',
};
const LoginCard = () => {
  const [formVal, setFormVal] = useState<Partial<loginPayload>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginPayload>({
    mode: 'onBlur',
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: initFormVal,
  });

  async function handleLogin(data: loginPayload) {
    const payload = {
      id: data.id,
      password: data.password,
    };

    setFormVal(payload);
  }

  return (
    <>
      <Heading as='h3' className='my-10 text-center font-bold'>
        React hook form + Zod (Validation)
      </Heading>
      <div className='mb-3 flex-col items-center justify-center gap-3'>
        <Card className='w-auto'>
          <CardContent className='py-10'>
            <form onSubmit={handleSubmit(handleLogin)} id='login-form'>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Input
                    id='id'
                    type='text'
                    placeholder='User ID'
                    autoComplete='off'
                    errorBorder={!!errors.id}
                    {...register('id')}
                  />
                  {errors.id && (
                    <p className='mt-2 text-xs text-red-500'>
                      {' '}
                      {errors.id?.message}{' '}
                    </p>
                  )}
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <InputPassword
                    id='password'
                    type='password'
                    placeholder='Password'
                    autoComplete='off'
                    errorBorder={!!errors.password}
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className='mt-2 text-xs text-red-500'>
                      {' '}
                      {errors.password?.message}{' '}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex'>
            <Button
              isLoading={status === 'pending'}
              form='login-form'
              type='submit'
              className={buttonVariants({
                variant: 'default',
                className: 'uppercase-capitalize w-full',
              })}
            >
              Log in
            </Button>
          </CardFooter>
          {Object.keys(formVal).length ? (
            <Text as='pre' className='px-10 py-5 text-base'>
              {JSON.stringify(formVal, null, 2)}
            </Text>
          ) : null}
        </Card>
      </div>
    </>
  );
};

export default LoginCard;
