// queue
console.log('queue');
let q = [];

q.push({a: 1});
q.push({a: 2});
q.push({a: 3});

while (q.length) {
    let t = q.shift();

    console.log(t);
}



// stack

console.log('stack');

let s = [];

s.push({a: 1});
s.push({a: 2});
s.push({a: 3});

while (s.length) {
    let t = s.pop();

    console.log(t);
}
