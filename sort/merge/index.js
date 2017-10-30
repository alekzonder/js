module.exports = function mergeSort(arr) {
        if (arr.length == 1) {
            return arr;
        }

        let slice = Math.floor(arr.length / 2);

        // slice
        let a = arr.slice(0, slice);
        let b = arr.slice(slice);

        a = (this) ? this.mergeSort(a) : mergeSort(a);
        b = (this) ? this.mergeSort(b) : mergeSort(b);

        var result = [];

        let i = 0;
        let j = 0;

        for (; i < a.length;) {
            if (this && typeof this.iterationCount === 'number') {
                this.iterationCount++;
            }

            let a_i = a[i];
            let b_j = b[j];

            if (typeof b_j === 'undefined') {
                result = result.concat(a.slice(i));
                break;
            }

            if (a_i < b_j) {
                result.push(a_i);
                i++;
            } else {
                result.push(b_j);
                j++;
            }
        }

        if (b.slice(j).length) {
            result = result.concat(b.slice(j));
        }

        return result;
    };
