'use strict';

// for (let letter of 'Observable') {
//     console.log(letter);
// }

// function observe(observable) {
//     for (let letter of observable) {
//         console.log(letter);
//     }
// }
//
// observe('Observable');

// function observe(observable, next, done) {
//     for (let letter of observable) {
//         next(letter);
//     }
//
//     done();
// }
//
// observe('Observable', letter => console.log(letter), () => console.log('done'));

// class Observable {
//     constructor(source) {
//         this.source = source;
//         this.result = this.source;
//     }
//
//     subscribe(next, done) {
//         for (let item of this.result) {
//             next(item);
//         }
//     }
// }
//
// new Observable('Observable').subscribe(letter => console.log(letter));

// class Observable {
//     constructor(source) {
//         this.source = source;
//         this.result = this.source;
//     }
//
//     subscribe(next, done) {
//         for (let item of this.result) {
//             next(item);
//         }
//     }
//
//     filter(predicate) {
//         this.result = this.result.filter(predicate);
//         return this;
//     }
// }
//
// new Observable('Observable').subscribe(letter => console.log(letter));

class Observable {
    constructor(source) {
        this.source = source.split('');
        this.result = this.source;
    }

    subscribe(next, done) {
        for (let item of this.result) {
            next(item);
        }
    }

    filter(predicate) {
        this.result = this.result.filter(predicate);
        return this;
    }

    map(callback) {
        this.result = this.result.map(callback);
        return this;
    }
}

new Observable('Observable')
    .map(letter => letter.toUpperCase())
    .filter(letter => letter === 'O')
    .subscribe(letter => console.log(letter));