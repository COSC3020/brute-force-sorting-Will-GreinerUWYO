function permutationSort(a) {
    let length = a.length;
    let c = []; // control array
    let temp = 0;
    let permutations = 0;

    // builds the control array
    // the control array works by incrementing c[i] whenever a swap is performed on the [i] element
    // when this array is reset, c[i] = i, and then all swaps completed. For example, no swaps at i = 0, 1 swap at i = 1 etc.
    // c[i] is reset following a of i, since there is now a new option at c[i] and all previous permutations are done.
    for(let i = 0; i < length; i++) {
        c[i] = 0;
    }
    
    let i = 1;
    // uses an iterative version of Heap's algorithm.
    while(i < length) {
        // if the array is sorted, returns permutations.
        if(checkSort(a)) {
            return permutations;
        }
        if (c[i] < i) {
            // if the index is even, swap the first value with the value at the index.
            if (i%2 === 0) {
                temp = a[0];
                a[0] = a[i];
                a[i] = temp;
            }
            // if the index is odd, swap the value at the index with the value at the control array's index.
            else{
                temp = a[c[i]];
                a[c[i]] = a[i];
                a[i] = temp;
            }
            // Resets index and increments control and permutations.
            c[i] += 1;
            i = 1;
            permutations++;
        }
        else {
            // resets control array, increments index
            c[i] = 0;
            i += 1;
        }
    }
    return permutations;
}

// simple helper function to ensure is sorted.
function checkSort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
