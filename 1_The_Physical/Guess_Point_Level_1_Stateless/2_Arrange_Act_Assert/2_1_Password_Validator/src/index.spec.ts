import {
  createValidator,
  validateMaxLength,
  validateMinLength,
  validateNumbers,
  validateUppercaseLetter,
  validatorPipe
} from "./index";

describe('use custom password validator', () => {
  it("shows error when password length is < 8", () => {
    const validators = validatorPipe([validateMinLength(8)])
    const validatePassword = createValidator(validators)

    expect(validatePassword("to0Shor")).toEqual({
      valid: false,
      errors: ["too short"]
    })
  })

  it("shows error when password length > 15", () => {
    const validators = validatorPipe([validateMaxLength(15)])
    const validatePassword = createValidator(validators)

    expect(validatePassword("thispasswordistoolong")).toEqual({
      valid: false,
      errors: ["too long"]
    })
  })

  it("shows error when there is no number in password", () => {
    const validators = validatorPipe([validateNumbers])
    const validatePassword = createValidator(validators)

    expect(validatePassword("nonumber")).toEqual({
      valid: false,
      errors: ["missing number"]
    })
  })

  it("shows error when there is no uppercase letter in password", () => {
    const validators = validatorPipe([validateUppercaseLetter])
    const validatePassword = createValidator(validators)

    expect(validatePassword("nouppercase")).toEqual({
      valid: false,
      errors: ["missing uppercase letter"]
    })
  })

  it("shows multiple errors, missing number, missing uppercase and too short", () => {
    const validators = validatorPipe([validateNumbers, validateUppercaseLetter, validateMinLength(8)])
    const validatePassword = createValidator(validators)

    expect(validatePassword("noup")).toEqual({
      valid: false,
      errors: ["missing number", "missing uppercase letter", "too short"]
    })
  })

  it("shows no errors for valid state", () => {
    const validators = validatorPipe([validateNumbers, validateUppercaseLetter, validateMinLength(8)])
    const validatePassword = createValidator(validators)

    expect(validatePassword("Y3sValid")).toEqual({
      valid: true,
      errors: []
    })
  })
});
