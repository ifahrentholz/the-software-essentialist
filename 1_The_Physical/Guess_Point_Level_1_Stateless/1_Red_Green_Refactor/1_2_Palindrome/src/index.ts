export const isPalindrom = (text: string) => {
  const t1 = text.replace(/\s/g, '').toLowerCase();
  const t2 = t1.split('').reverse().join('')
  return t1 === t2
}
