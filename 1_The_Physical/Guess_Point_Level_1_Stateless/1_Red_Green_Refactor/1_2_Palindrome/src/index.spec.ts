import { isPalindrom } from "./index";

describe('palindrome checker', () => {
  it("detects that 'pop' is a polindrom", () => {
    expect(isPalindrom('pop')).toBe(true)
  })

  it("detects that 'you' is not a palindrom", () => {
    expect(isPalindrom('you')).toBe(false)
  })

  it("detects that 'yolo' is not a palindrom", () => {
    expect(isPalindrom('yolo')).toBe(false)
  })
  it("detects that sentences can be palindrom", () => {
    expect(isPalindrom('Was It A Rat I Saw')).toBe(true)
  })
  it("detects that sentences can be palindrom 2", () => {
    expect(isPalindrom('Never Odd or Even')).toBe(true)
  })
  it("detects that sentences can not be palindrom", () => {
    expect(isPalindrom('I Never Odd or Even')).toBe(false)
  })
})
