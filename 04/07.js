'use strict';

const inputElt = document.getElementById('search');
const outputElt = document.getElementById('output');
const loadingElt = document.getElementById('loading');

function renderItems(items) {
    const html = items
        .map(({name}) => `<div>${name}</div>`)
        .join('');
    outputElt.innerHTML = html;
}

const start$ = Rx.Observable.fromEvent(inputElt, 'input')
    .map((evt) => evt.target.value);

const query$ = start$
    .debounceTime(300)
    .distinctUntilChanged()
    .filter((str) => str.length > 0);

const empty$ = start$
    .filter((str) => str.length === 0);

const request$ = query$
    .switchMap((query) => {
        const request = fetch(`https://api.github.com/search/repositories?q=${query}`)
            .then((response) => response.json());

        return Rx.Observable.from(request).takeUntil(empty$);
    });

start$
    .subscribe(() => {
        outputElt.innerHTML = '';
    });

query$
    .subscribe((search) => {
        console.log('--- search', search);
    });

request$
    .map((val) => val.items)
    .filter((items) => items && items.length > 0)
    .subscribe((items) => {
        renderItems(items);
    });
