import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../../lib/firebase/client';

export enum ResponseStatus {
  Success = 'success',
  Error = 'error',
}

export interface IServiceResponse {
  status: ResponseStatus;
  errorMessage?: string;
}

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
}
