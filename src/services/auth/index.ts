import { IServiceResponse, ResponseStatus } from '@services/types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, database } from '../../lib/firebase/client';

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
  static async login(request: ILoginRequest): Promise<IServiceResponse> {
    try {
      await signInWithEmailAndPassword(auth, request.email, request.password);
      return {
        status: ResponseStatus.Success,
      };
    } catch (error: any) {
      return {
        status: ResponseStatus.Error,
        errorMessage: error.message,
      };
    }
  }

  static async register(request: IRegisterRequest): Promise<IServiceResponse> {
    if (request.password !== request.confirmPassword) {
      return {
        status: ResponseStatus.Error,
        errorMessage: 'Your passwords do not match.',
      };
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        request.email,
        request.password,
      );
      await this._createUser({
        email: request.email,
        username: request.username,
      });
      return {
        status: ResponseStatus.Success,
      };
    } catch (error: any) {
      return {
        status: ResponseStatus.Error,
        errorMessage: error.message,
      };
    }
  }

  static logout() {
    return auth.signOut();
  }

  static async _createUser(
    user: Omit<IRegisterRequest, 'password' | 'confirmPassword'>,
  ) {
    return await addDoc(collection(database, 'users'), user);
  }
}
