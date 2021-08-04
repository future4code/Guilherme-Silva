const pegarNumeros = (num: number, acc: number = 1): number => {
    if (num <= 10) {
        return acc
    }

    return pegarNumeros(num / 10, acc + 1)
}