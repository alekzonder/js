function maxHeapify(A, i) {
    let l = 2 * i;
    let r = 2 * i + 1;

    let a = A.arr;

    let heapSize = A.heapSize;

    let largest = i;

    if (l <= heapSize && a[l] > a[largest]) {
        largest = l;
    }

    if (r <= heapSize && a[r] > a[largest]) {
        largest = r;
    }

    if (largest !== i) {

        let a_i = a[i];
        let a_largest = a[largest];

        a[i] = a_largest;
        a[largest] = a_i;

        maxHeapify(A, largest);
    }
}

function buildMaxHeap(A) {
    A.heapSize = A.length;

    for (let i = Math.ceil(A.length / 2); i >= 0; i--) {
        maxHeapify(A, i);
    }

    return A;
}

function minHeapify(A, i) {
    let l = 2 * i;
    let r = 2 * i + 1;

    let heapSize = A.heapSize;

    let a = A.arr;

    let smallest = i;

    if (l <= heapSize && a[l] < a[smallest]) {
        smallest = l;
    }

    if (r <= heapSize && a[r] < a[smallest]) {
        smallest = r;
    }

    if (i !== smallest) {
        let a_i = a[i];
        let a_smallest = a[smallest];

        a[i] = a_smallest;
        a[smallest] = a_i;

        minHeapify(A, smallest);
    }
}

function buildMinHeap(A) {
    A.heapSize = A.length;

    for (let i = Math.floor(A.length / 2); i >= 0; i--) {
        minHeapify(A, i);
    }

    return A;
}

function maxHeapSort(arr) {
    let A = {
        arr,
        length: arr.length - 1,
        heapSize: arr.length - 1
    };

    buildMaxHeap(A);

    let a = A.arr;

    for (let i=A.length; i >= 1; i--) {
        let a_0 = a[0];
        let a_i = a[i];
        a[0] = a_i;
        a[i] = a_0;

        A.heapSize = A.heapSize - 1;

        maxHeapify(A, 0);
    }

    return arr;
}

// function minHeapSort(arr) {
//     let A = {
//         arr,
//         length: arr.length - 1,
//         heapSize: arr.length - 1
//     };
//
//     buildMinHeap(A);
//
//     let a = A.arr;
//
//     for (let i=1; i <= A.length; i--) {
//         let a_max = a[A.length];
//         let a_i = a[i];
//         a[A.length] = a_i;
//         a[i] = a_max;
//
//         A.heapSize = A.heapSize - 1;
//
//         minHeapify(A, 0);
//     }
//
//     return arr;
// }

module.exports = {
    maxHeapSort,
    // minHeapSort
};
