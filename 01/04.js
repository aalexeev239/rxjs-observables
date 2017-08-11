'use strict';

function observe(observable, next, done) {
    for (let letter of observable) {
        next(letter);
    }

    done();
}

observe('Observable',
    (letter) => console.log(letter),
    () => console.log('done')
);
