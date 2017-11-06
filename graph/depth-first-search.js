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
    7: [5]
};

let search = {};

for (let i in g) {
    search[i] = {
        adj: g[i],
        color: 'white',
        prev: null,
        d: null,
        f: null
    };
}

let time = 0;

Object.keys(search).forEach((ui) => {
    let u = search[ui];

    if (u.color === 'white') {
        visit(search, u);
    }
});

function visit(search, u) {
    // console.log('!');
    time++;
    u.d = time;
    u.color = 'gray';

    u.adj.forEach((vi) => {
        let v = search[vi];

        if (v.color === 'white') {
            v.prev = u;
            visit(search, v);
        }
    });

    u.color = 'black';
    time++;
    u.f = time;
}

Object.keys(search).forEach((i) => {
    console.log(i, search[i]);
    // console.log(i, search[i].d, search[i].f);
});
