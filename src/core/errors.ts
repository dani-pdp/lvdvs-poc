import { ApiErrorDto } from './dto/api.error.dto';

export const ApiErrors = {
  UNKNOWN_API_ERROR: {
    code: 1003,
    message: 'Something has failed.',
  },
};

export const DomainErrors = {
  ...ApiErrors,
  INVALID_CAT_ID: {
    code: 3001,
    message: 'Invalid cat id provided.',
  },
  INVALID_CAT_BIO: {
    code: 3002,
    message: 'The bio provided is too short.',
  },
};

export interface IDomainError {
  code: number;
  message: string;
  extraInfo?: object;
}

export class DomainError extends Error {
  constructor(private readonly error: IDomainError) {
    super(error.message);
  }

  public toApiError(): ApiErrorDto {
    return this.error;
  }

  public static getError(errorCode: any): IDomainError {
    return DomainErrors[errorCode] || DomainErrors.UNKNOWN_API_ERROR;
  }
}
