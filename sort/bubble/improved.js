module.exports = function bubbleSort(a) {
    let len = a.length;

    if(len === 1) {
        return a;
    }

    let n = 0;

    let changedPosition = len - 1;
    let changed = 0;

    for (let j=0; j < len - 1; j++) {

        changed = 0;

        // console.log('j', j, changedPosition);

        for (let i=0; i < changedPosition; i++) {
            n++;

            let a_i = a[i];
            let a_i_1 = a[i + 1];

            // console.log(j, i, a_i, a_i_1, a);

            if (typeof a_i_1 !== 'undefined' && a_i > a_i_1 ) {
                a[i] = a_i_1;
                a[i + 1] = a_i;
                changed = i;
            }
        }

        if (!changed) {
            break;
        }

        changedPosition = changed;

    }

    if (this) {
        this.iterationCount = n;
    }

    return a;
}