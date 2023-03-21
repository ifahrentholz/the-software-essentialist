type PasswordValidatorResponse = {
  valid: boolean,
  errors: string[]
}

type ValidatorResult = string | undefined
type Validator = (password: string) => string[]

export const validateMinLength = (minLength: number) => (password: string): ValidatorResult => password.length < minLength ? "too short" : undefined
export const validateMaxLength = (maxLength: number) => (password: string): ValidatorResult => password.length > maxLength ? "too long" : undefined
export const validateNumbers = (password: string) => !!password.match(/\d/g) ? undefined : "missing number"
export const validateUppercaseLetter = (password: string) => !!password.match(/[A-Z]/g) ? undefined : "missing uppercase letter"

const validatePassword = (password: string, validator: Validator): PasswordValidatorResponse => {
  const errors = validator(password)
  return {
    valid: errors.length === 0,
    errors
  }
}

export const validatorPipe = (fns: Function[]) => (password: string): string[] => fns.map(fn => fn(password)).filter(item => item !== undefined)

export const createValidator = (validator: Validator) => (password: string) => {
  return validatePassword(password, validator)
}
