'use strict';

const inputElt = document.getElementById('search');
const outputElt = document.getElementById('output');
const loadingElt = document.getElementById('loading');

const start$ = Rx.Observable.fromEvent(inputElt, 'input')
    .map((evt) => evt.target.value);

start$
    .subscribe((search) => {
        console.log('--- search', search);
    });
