function addNode(tree, x) {

    if (typeof tree.x === 'undefined') {
        tree.x = x;
        tree.left = {};
        tree.right = {};
    } else if (x < tree.x) {
        tree.left = addNode(tree.left, x);
    } else {
        tree.right = addNode(tree.right, x);
    }

    return tree;
}

function sort(tree, result) {

    if (typeof tree.x !== 'undefined') {
        sort(tree.left, result);
        result.push(tree.x);
        sort(tree.right, result);
    }

    return result;
}

module.exports = function treeSort(arr) {
    let tree = {};

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        // console.log(tree, x);
        addNode(tree, x);
    }

    // console.log(require('util').inspect(tree, {depth: null}));

    let result = [];

    sort(tree, result);

    // console.log(require('util').inspect(sort(tree, result), {depth: null}));

    return result;
};
