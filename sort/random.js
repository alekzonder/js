module.exports = function randomIntArray(n, min, max) {
    let a = [];
    let b = [];

    for (let i = 0; i < n; i++) {
        let rnd = getRandomInt(min, max);
        a.push(rnd);
        b.push(rnd);
    }

    return {a, b};
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
