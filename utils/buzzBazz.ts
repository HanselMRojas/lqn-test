export function createNumbers(max: number = 100): number[] {
  const numbers: number[] = new Array(max + 1).fill(0).map((_, i) => i)
  return numbers
}

export function determineSolution(numbers: number[]): string[] {
  return numbers.map((n) => {
    if (n % 2 === 0 && n % 5 === 0) {
      return `${n}: BuzzBazz (par y múltiplo de 5)`
    } else if (n % 2 === 0) {
      return `${n}: Buzz (par)`
    } else if (n % 5 === 0) {
      return `${n}: Bazz (multiplo de 5)`
    } else {
      return `${n}: --`
    }
  })
}
