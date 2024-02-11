import { object, string, z } from 'zod';

export const LoginValidationSchema = object({
  id: string().min(1, { message: 'ID is required' }),
  password: string().min(1, { message: 'Password is required' }),
});

export type loginPayload = z.infer<typeof LoginValidationSchema>;
