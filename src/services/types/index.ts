export enum ResponseStatus {
  Success = 'success',
  Error = 'error',
}

export interface IServiceResponse {
  status: ResponseStatus;
  errorMessage?: string;
}
