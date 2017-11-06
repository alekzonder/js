function createHeap() {
    let arr = [100, 1, 3, 2, 8, 6, 4, 10];

    let B = {};

    Object.defineProperty(B, 'heapSize', {
        value: arr.length,
        enumerable: false,
        writable: true
    });

    arr.forEach((v, k) => {B[k + 1] = v;});



    return B;
}

let B = createHeap();


function maxHeapify(A, i) {
    let l = 2 * i;
    let r = 2 * i + 1;

    let largest = i;

    if (l <= A.heapSize && A[l] > A[largest]) {
        largest = l;
    }

    if (r <= A.heapSize && A[r] > A[largest]) {
        largest = r;
    }

    // console.log(i, l, r, largest);

    if (largest !== i) {
        let a_i = A[i];
        let a_largest = A[largest];

        A[i] = a_largest;
        A[largest] = a_i;

        maxHeapify(A, largest);
    }
}


function buildMaxHeap(A) {
    for (let i = Math.ceil(A.heapSize / 2); i >= 1; i--) {
        // console.log(i, A.arr);
        maxHeapify(A, i);
    }

    return A;
}

function heapExtractMaximum(A) {
    if (A.heapSize < 1) {
        throw new Error('empty');
    }

    let max = A[1];

    A[1] = A[A.heapSize];

    delete A[A.heapSize];

    A.heapSize = A.heapSize - 1;

    maxHeapify(A, 1);

    return max;
}

function parent(i) {
    return Math.floor(i/2);
}

function heapIncKey(A, i, key) {
    if (key < A[i]) {
        throw 'Новый ключ меньше текущего';
    }

    A[i] = key;

    while (i > 1 && A[parent(i)] < A[i]) {
        let a_i = A[i];
        let a_parent = A[parent(i)];

        A[i] = a_parent;
        A[parent(i)] = a_i;

        i = parent(i);
    }
}

function maxHeapInsert(A, key) {
    A.heapSize = A.heapSize + 1;
    A[A.heapSize] = -100;

    heapIncKey(A, A.heapSize, key);
}

console.log('raw', B);

console.log('builded', buildMaxHeap(B));

maxHeapInsert(B, 101);

console.log('inc', B);

console.log(Object.keys(B).map(i => B[i]));

let maxes = [];

while (B.heapSize) {
    maxes.push(heapExtractMaximum(B));
}

console.log(maxes);
