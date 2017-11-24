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
        textElement.innerHTML = `top: ${event.y}, <br> left: ${event.x}`;
    });

mouseDown$
    .switchMap(() => mouseMove$.pairwise().takeUntil(mouseUp$))
    .map(([startEvent, endEvent]) => [
        {x: startEvent.x, y: startEvent.y},
        {x: endEvent.x, y: endEvent.y}
    ])
    .subscribe(([start, end]) => {
        drawLine(start, end);
    });
