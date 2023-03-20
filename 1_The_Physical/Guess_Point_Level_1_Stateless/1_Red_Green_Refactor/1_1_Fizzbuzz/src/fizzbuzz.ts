import { isMultipleOf } from "./isMultipleOf";

const isMultipleOf3 = isMultipleOf(3)
const isMultipleOf5 = isMultipleOf(5)

export function fizzbuzz(number: number) {
  if(isMultipleOf3(number) && isMultipleOf5(number)) {
    return 'Fizzbuzz'
  }

  if(isMultipleOf3(number)) {
    return "Fizz"
  }

  if(isMultipleOf5(number)) {
    return "Buzz";
  }

  return number.toString();
}
