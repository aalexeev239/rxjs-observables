'use strict';

class Observable {
    constructor(source) {
        this.source = source.split('');
        this.result = this.source;
    }

    subscribe(next, done) {
        this.result.forEach((item) => {
            next(item);
        });

        done();
    }

    filter(predicate) {
        this.result = this.result.filter(predicate);
        return this;
    }
}

new Observable('Observable')
    .filter((letter) => letter.charCodeAt(0) % 2 === 0)
    .subscribe(
        (letter) => console.log(letter),
        () => console.log('done')
    );
