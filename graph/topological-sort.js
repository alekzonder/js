var dict = {
    0: 'трусы',
    1: 'брюки',
    2: 'ремень',
    3: 'рубашка',
    4: 'галстук',
    5: 'пиджак',
    6: 'носки',
    7: 'туфли',
    8: 'часы'
};
var g = {
    0: [1, 7],
    1: [2, 7],
    2: [5],
    3: [2, 4],
    4: [5],
    5: [],
    6: [7],
    7: [],
    8: []
};

let search = {};

for (let i in g) {
    search[i] = {
        i,
        adj: g[i],
        color: 'white',
        prev: null,
        d: null,
        f: null
    };
}

let time = 0;

let list = [];

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

    list.unshift(u);
}


// Object.keys(search).forEach((i) => {
//     console.log(i, search[i], dict[i]);
//     // console.log(i, search[i].d, search[i].f);
// });

list.forEach((u) => {
    console.log(dict[u.i], u.d, u.f);
});

// console.log('---');
//
// list.sort((a, b) => b.f - a.f).forEach((u) => {
//     console.log(dict[u.i], u.d, u.f);
// });
