import { fizzbuzz } from "./fizzbuzz";
import { isMultipleOf } from "./isMultipleOf";

const isMultipleOf3 = isMultipleOf(3)

describe("curried multiple of", () => {
  it("returns true if multiple of 3", () => {
    expect(isMultipleOf3(9)).toBe(true)
  })

  it("returns false if not multiple of 3", () => {
    expect(isMultipleOf3(7)).toBe(false)
  })
})

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzbuzz(5)).toBe("string");
  });
  it("returns 'Fizz' for a multiple of 3", () => {
    expect(fizzbuzz(9)).toBe('Fizz')
  })

  it("returns 'Buzz' for a multiple of 5", () => {
    expect(fizzbuzz(10)).toBe('Buzz')
  })

  it("returns 'Fizzbuzz' for a multiple of 3 AND 5", () => {
    expect(fizzbuzz(15)).toBe('Fizzbuzz')
  })

  it("returns number when number is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(4)).toBe('4')
  })
});
