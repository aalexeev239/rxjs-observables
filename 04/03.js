'use strict';

const inputElt = document.getElementById('search');
const outputElt = document.getElementById('output');
const loadingElt = document.getElementById('loading');

const start$ = Rx.Observable.fromEvent(inputElt, 'input')
    .map((evt) => evt.target.value);

const query$ = start$
    .debounceTime(300)
    .distinctUntilChanged()
    .filter((str) => str.length > 0);

const request$ = query$
    .switchMap((query) => {
        const request = fetch(`https://api.github.com/search/repositories?q=${query}`)
            .then((response) => response.json());

        return Rx.Observable.from(request);
    });

query$
    .subscribe((search) => {
        console.log('--- search', search);
    });

request$
    .subscribe((result) => {
        console.log('--- result', result);
    });
