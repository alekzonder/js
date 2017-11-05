module.exports = function bubbleSort(a) {
    let len = a.length;

    if(len === 1) {
        return a;
    }

    let n = 0;

    for (let j=0; j < len - 1; j++) {

        let changed = false;

        for (let i=0; i < len - j; i++) {
            n++;

            let a_i = a[i];
            let a_i_1 = a[i + 1];

            // console.log(j, i, a_i, a_i_1, a);

            if (typeof a_i_1 !== 'undefined' && a_i > a_i_1 ) {
                a[i] = a_i_1;
                a[i + 1] = a_i;
                changed = true;
            }
        }

        if (!changed) {
            break;
        }

    }

    if (this) {
        this.iterationCount = n;
    }

    return a;
}