'use strict';

function observe(observable, next) {
    for (let letter of observable) {
        next(letter);
    }
}

observe('Observable', letter => console.log(letter));