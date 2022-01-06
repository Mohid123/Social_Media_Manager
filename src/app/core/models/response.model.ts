import { LoginResponse } from './response/login-response.model';
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response {
  status: boolean;
  data: LoginResponse | any;
}

export class ApiResponse<T> {
  headers: any;
  constructor() {
    this.errors = [];
  }
  status: boolean;
  data: T;
  errors?: ApiError[] | any;
  getErrorsText(): string {
    return this.errors.map((e:any) => e.text).join(' ');
  }
  hasErrors(): boolean {
    return this.errors.length > 0;
  }
}

export class ApiError {
  code: ErrorCode;
  text: string;
}

export enum ErrorCode {
  UnknownError = 1,
  OrderIsOutdated = 2
}
