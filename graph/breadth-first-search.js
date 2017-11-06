/**
 */

let g = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4, 5],
    3: [1, 3],
    4: [2, 5],
    5: [4, 2],
    6: [3],
    7: []
};

let search = {};


for (let i in g) {
    search[i] = {
        adj: g[i],
        color: 'white',
        prev: null,
        d: 0
    };
}

let si = 6;

let s = search[si];

s.color = 'gray';
s.d = 0;
s.prev = null;

let q = [];

q.push(s);

while (q.length) {
    let u = q.shift();

    u.adj.forEach(function (vi) {
        let v = search[vi];

        if (v.color === 'white') {
            v.color = 'gray';
            v.d = v.d + 1;
            v.prev = u;
            q.push(v);
        }
    });

    u.color = 'black';
}


// console.log(require('util').inspect(search, {depth: null}));

Object.keys(search).forEach((i) => {
    console.log(i, search[i].d);
});
