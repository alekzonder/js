var randomIntArray = require('../sort/random');

function randomPartition(a, p, r) {
    var rnd = Math.floor(Math.random() * (r - p)) + p;

    let a_rnd = a[rnd];
    let a_r = a[r];

    a[rnd] = a_r;
    a[r] = a_rnd;

    return partition(a, p, r);
}

function partition(a, p, r) {
    var x = a[r];

    let i = p - 1;

    for (let j = p; j < r - 1; j++) {
        if (a[j] < x) {
            i++;

            let a_i = a[i];
            let a_j = a[j];

            a[i] = a_j;
            a[j] = a_i;
        }
    }

    let a_i_1 = a[i + 1];
    let a_r = a[r];

    a[i + 1] = a_r;
    a[r] = a_i_1;

    return i + 1;
}

function randomSelect(a, p, r, i) {
    if (p === r) {
        return a[p];
    }

    let q = randomPartition(a, p, r);

    let k = q - p + 1;

    if (i === k) {
        return a[i];
    } else if (i < k) {
        return randomSelect(a, p, q - 1, i);
    } else {
        return randomSelect(a, q + 1, r, i - k);
    }

}

var arr = randomIntArray(10, 100, 999);

let a = arr.a;

console.log(a);

console.log(randomSelect(a, 0, a.length - 1));
