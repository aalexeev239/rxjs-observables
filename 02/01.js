'use strict';

Rx.Observable.from('Observable')
    .subscribe(
        letter => {
            console.log('--- letter', letter);
        },
        error => {
            console.log('--- error', error);
        },
        () => {
            console.log('done');
        });

const areaElement = document.querySelector('.area');
const textElement = document.querySelector('.text');

Rx.Observable.fromEvent(areaElement, 'mousemove')
    // 1
    .subscribe((event) => {
        console.log('--- event', event);
    });
    //2
    // .throttleTime(200)
    // .subscribe((event) => {
    //     textElement.innerHTML = `top: ${event.x}, <br> left: ${event.y}`;
    // });