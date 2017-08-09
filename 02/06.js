'use strict';

const areaElement = document.querySelector('.area');
const ctx = areaElement.getContext('2d');
const textElement = document.querySelector('.text');

function drawLine(start, end) {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

const mouseMove$ = Rx.Observable.fromEvent(areaElement, 'mousemove');
const mouseUp$ = Rx.Observable.fromEvent(areaElement, 'mouseup');
const mouseDown$ = Rx.Observable.fromEvent(areaElement, 'mousedown');

mouseMove$
    .subscribe((event) => {
        textElement.innerHTML = `top: ${event.x}, <br> left: ${event.y}`;
    });

mouseUp$
    .subscribe(() => {
        console.log('--- mouseUp');
    });

mouseDown$
    .subscribe(() => {
        console.log('--- mouseDown$');
    });

// mouseMove$
//     .map(({x, y}) => ({x, y}))
//     .pairwise()
//     .subscribe(([start, end]) => {
//         drawLine(start, end);
//     });

mouseDown$
    .switchMap(() => mouseMove$)
    .subscribe((event) => {
        console.log('--- move', event);
    });