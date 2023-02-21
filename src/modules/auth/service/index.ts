import { getEnviroment } from '@urls';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { setCookie } from 'nookies';

import { auth } from '../../../lib/firebase/client';

interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILoginRequest {
  email: string;
  password: string;
}

export class AuthService {
  static async login(request: ILoginRequest) {
    try {
      await signInWithEmailAndPassword(auth, request.email, request.password);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async register(request: IRegisterRequest) {
    if (request.password !== request.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        request.email,
        request.password,
      );
      await this.createCreator(request.email, request.username);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static storeAuthCookie() {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCookie(null, 'token', '', { path: '/' });
      } else {
        const token = await user.getIdToken();
        setCookie(null, 'token', token, { path: '/' });
      }
    });
  }

  static logout() {
    return auth.signOut();
  }

  static async createCreator(emailAddress: string, username: string) {
    const response = await fetch(getEnviroment() + '/creator/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress, username }),
    });
    const createdUser = await response.json();

    return createdUser;
  }
}
