import { ApiErrors, IDomainError, DomainError, DomainErrors } from '../../core/errors';

export class ApiErrorDto {
  code: number;
  message: string;
  extraInfo?: object;
}

export const fromError = error => {
  return new DomainError(error.code && error.message ? error : DomainErrors.UNKNOWN_API_ERROR).toApiError();
};
