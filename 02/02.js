'use strict';

Rx.Observable.create((observer) => {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
        observer.next(3);
        observer.complete();
    }, 1000);

    setTimeout(() => {
        observer.next(4);
    }, 2000);
}).subscribe(
    (next) => {
        console.log('--- next: ', next);
    },
    (error) => {
        console.log('--- error', error);
    },
    () => {
        console.log('done');
    });
