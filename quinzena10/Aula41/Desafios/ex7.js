function complexidade(a: number, b: number): number {
    if(b<0){
        return 0;
    }else if (b === 0){
        return a;
    }else {
        return a* complexidade(a, b -1);
    }
 }

//  Complexidade = O(b)