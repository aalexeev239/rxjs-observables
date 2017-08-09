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

Rx.Observable.fromEvent(areaElement, 'mousemove')
    .subscribe((event) => {
        textElement.innerHTML = `top: ${event.x}, <br> left: ${event.y}`;
    });

Rx.Observable.fromEvent(areaElement, 'mousemove')
    .map(({x, y}) => ({x, y}))
    .pairwise()
    .subscribe(([start, end]) => {
        drawLine(start, end);
    });