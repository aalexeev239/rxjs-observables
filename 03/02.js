'use strict';

const areaElement = document.querySelector('.area');
const ctx = areaElement.getContext('2d');
const textElement = document.querySelector('.text');

Rx.Observable.fromEvent(areaElement, 'mousemove')
    .subscribe((event) => {
        textElement.innerHTML = `top: ${event.y}, <br> left: ${event.x}`;
    });

Rx.Observable.fromEvent(areaElement, 'mousemove')
    .throttleTime(200)
    // --> 1
    .subscribe((event) => {
       console.log('--- event', event);
    });
    // --> 2
    // .subscribe(({x, y}) => {
    //     console.log('--- event', x, y);
    // });
    // --> 3
    // .map(({x, y}) => ({x, y}))
    // .subscribe((coord) => {
    //     console.log('--- coord', coord);
    // });
    // --> 4
    // .map(({x, y}) => ({x, y}))
    // .pairwise()
    // .subscribe((pair) => {
    //     console.log('--- pair', pair);
    // });
    // --> 5
    // .map(({x, y}) => ({x, y}))
    // .pairwise()
    // .subscribe(([start, end]) => {
    //     console.log('--- start', start);
    //     console.log('--- end', end);
    // });
    // --> 6
    // .map(({x, y}) => ({x, y}))
    // .pairwise()
    // .subscribe(([start, end]) => {
    //     ctx.beginPath();
    //     ctx.moveTo(start.x, start.y);
    //     ctx.lineTo(end.x, end.y);
    //     ctx.lineWidth = 3;
    //     ctx.strokeStyle = 'green';
    //     ctx.stroke();
    // });
