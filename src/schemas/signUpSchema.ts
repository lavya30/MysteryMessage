import { sign } from 'crypto';
import { use } from 'react';
import { email, z } from 'zod';

export const usernameValidation = z
  .string()
  .min(6, 'Password must be at least 6 characters long')  
  .max(64, 'Password must be at most 64 characters long')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores');

export const signupSchema = z.object(
  {
    username: usernameValidation,
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'})

  }
);