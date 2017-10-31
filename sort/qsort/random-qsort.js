module.exports = function qsort(a, p, r) {
    if (typeof p === 'undefined' && typeof r == 'undefined') {
        p = 0;
        r = a.length - 1;
    }

    if (this && !this.partition) {
        this.randomPartition = randomPartition;
        this.partition = partition;
    }

    if (p < r) {
        let q = randomPartition.call(this, a, p, r);

        qsort.call(this, a, p, q - 1);
        qsort.call(this, a, q + 1, r);
    }
};

function randomPartition(a, p, r) {
    let rnd_i = Math.floor(Math.random() * (r - p)) + p;

    let a_rnd_i = a[rnd_i];
    let a_r = a[r];

    a[r] = a_rnd_i;
    a[rnd_i] = a_r;

    return partition.call(this, a, p, r);
}

function partition(a, p, r) {
    let x = a[r];
    let i = p - 1;

    for (let j = p; j <= (r - 1); j++) {
        if (this && typeof this.iterationCount === 'number') {
            this.iterationCount++;
        }

        if (a[j] <= x) {
            i = i + 1;
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
