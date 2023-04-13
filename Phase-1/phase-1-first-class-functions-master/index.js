function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function named() {
        return;
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return;
    }
}