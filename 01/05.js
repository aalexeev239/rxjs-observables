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
}

new Observable('Observable')
    .subscribe(
        (letter) => console.log(letter),
        () => console.log('done')
    );
