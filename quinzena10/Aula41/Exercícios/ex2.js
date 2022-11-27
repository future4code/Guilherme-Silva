
const calcularSoma = (n: number, acc: number = 0): number => {
    if (n === 0) {
        return acc;
    }
    return calcularSoma(n - 1, acc + n)
}