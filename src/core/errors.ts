import { ApiErrorDto } from './dto/api.error.dto';

export const ApiErrors = {
  UNKNOWN_API_ERROR: {
    code: 1003,
    message: 'Something has failed.',
  },
};

export const DomainErrors = {
  ...ApiErrors,
  SAME_GLADIATOR: {
    code: 3001,
    message: 'Cannot create a combat with two instances of the same gladiator',
  },
  INVALID_COMBAT: {
    code: 3002,
    message: 'One or both gladiators are dead or in recover',
  },
  NO_SUCH_STYLE: {
    code: 3003,
    message: 'Style provided does not exist',
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
