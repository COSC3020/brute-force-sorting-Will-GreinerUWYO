function permutationSort(a) {
    let length = a.length;
    let c = [];
    let temp = 0;
    let permutations = 0;
    for(let i = 0; i < length; i++) {
        c[i] = 0;
    }
    
    let i = 1;
    while(i < length) {
        if(checkSort(a)) {
            return permutations;
        }
        if (c[i] < i) {
            if (i%2 === 0) {
                temp = a[0];
                a[0] = a[i];
                a[i] = temp;
            }
            else{
                temp = a[c[i]];
                a[c[i]] = a[i];
                a[i] = temp;
            }
            c[i] += 1;
            i = 1;
            permutations++;
        }
        else {
            c[i] = 0;
            i += 1;
        }
    }
    return permutations;
}


function checkSort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
