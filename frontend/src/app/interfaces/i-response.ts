export interface IResponseSuccess {
  success: boolean;
  message?: string;
  data?: object;
}

export interface IResponseError {
  success: boolean;
  message?: string;
  error?: object;
}

export interface IResponse {
  success: boolean;
  message?: string;
  data?: object;
}
