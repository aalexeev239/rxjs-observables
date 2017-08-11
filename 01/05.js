'use strict';

class Observable {
    constructor(source) {
        this.source = source.split('');
        this.result = this.source;
    }

    subscribe(next, done) {
        for (let item of this.result) {
            next(item);
        }

        done();
    }
}

new Observable('Observable')
    .subscribe(
        (letter) => console.log(letter),
        () => console.log('done')
    );
