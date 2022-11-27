const firstCapitalLetter = (
    s: string,
    char: string = ''
): string => {
    if ( char && char.toUpperCase() === char){
        return char;
    }

    return firstCapitalLetter(s.substring(1), s[0])
}