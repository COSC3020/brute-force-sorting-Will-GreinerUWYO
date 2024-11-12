function permutationSort(a) {
    return nextPermutation(a.length, a, 0);
}

function nextPermutation(iteration, a, permutations) {
    if (checkSort(a)) {
        return permutations;
    }
    if (iteration === 1) {
        return permutations;
    } 
    else {
        permutations++;

        for (var i = 0; i < iteration - 1; i++) {
            permutations = nextPermutation(iteration - 1, a, permutations)

            if (checkSort(a)) {
                return permutations;
            }

            if (iteration % 2 === 0) {
                let temp = a[i];
                a[i] = a[iteration - 1];
                a[iteration - 1] = temp;
            } else {
                let temp = a[0];
                a[0] = a[iteration - 1];
                a[iteration - 1] = temp;
            }
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
