const maiorValorArray = (
    arr: number[],
    i: number = 0,
    largest: number = 0
): number => {
    let largestAux = largest;
    if (arr[i] > largest) {
        largestAux = arr[i]
    }
    if (i === arr.length - 1) {
        return largestAux
    }

    return maiorValorArray(arr, i +1, largestAux);
}