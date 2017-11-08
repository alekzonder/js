// https://www.hackerrank.com/challenges/countingsort4/problem

let ii = `20
0 ab
6 cd
0 ef
6 gh
4 ij
0 ab
6 cd
0 ef
6 gh
0 ij
4 that
3 be
0 to
1 be
5 question
1 or
2 not
4 is
2 to
4 the`;

ii = ['20'];

for (let i = 0; i < 10000; i++) {
    ii.push('0 ' + i);
}

ii = ii.join('\n');

function test (input) {
    input = input = input.trim().split('\n').slice(1);

    let firstHalfIndex = Math.floor(input.length / 2);

    let million = 1000000;

    input = input.map((v, i) => {

        let x = v.split(' ');

        x[0] = +x[0];

        x[0] = 100 * million + 10 * million * x[0];

        x[0] = x[0] + i;

        x.push(i < firstHalfIndex);

        return x;

    });

    function partition(a, p, r, first) {
        let x = a[r][0];

        var i = p - 1;

        for (var j = p; j <= (r - 1); j++) {
            if (a[j][0] <= x) {
                i = i + 1;
                var a_i = a[i];
                var a_j = a[j];
                a[i] = a_j;
                a[j] = a_i;
            }

        }

        var a_i_1 = a[i + 1];
        var a_r = a[r];

        a[r] = a_i_1;
        a[i + 1] = a_r;

        return i + 1;
    }

    function randomPartition(a, p, r) {
        let rnd_i = Math.floor(Math.random() * (r - p)) + p;

        let a_rnd_i = a[rnd_i];
        let a_r = a[r];

        a[r] = a_rnd_i;
        a[rnd_i] = a_r;

        return partition.call(this, a, p, r);
    }

    function qsort(a, p, r, first) {
        if (p < r) {
            let q = randomPartition(a, p, r, first);

            qsort(a, p , q - 1);
            qsort(a, q + 1, r);
        }
    }

    qsort(input, 0, input.length - 1, true);

    var r  = input.map((v) => {
        return v[2]? '-' : v[1];
    });

    console.log(r.join(' '));
}

test(ii);
