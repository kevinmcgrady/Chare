import { User } from 'firebase/auth';
import { createContext } from 'react';

export const FirebaseAuthContext =
  createContext<User | null | undefined>(undefined);
