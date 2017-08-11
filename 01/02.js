'use strict';

function observe(observable) {
    for (let letter of observable) {
        console.log(letter);
    }
}

observe('Observable');
