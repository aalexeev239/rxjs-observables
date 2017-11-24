const Rx = require('rxjs/Rx');
const subject = new Rx.Subject();
const TIME_INTERVAL = 200;

const padding = value => `${value < 10 ? '0' : ''}${value}`;

function startEmitting() {
    let counter = 0;

    const interval = setInterval(() => {
        if (counter >= 20) {
            clearInterval(interval);
            subject.complete();
        }

        subject.next(padding(counter++));
    }, TIME_INTERVAL);
}

const sub1 = subject.subscribe((val) => {
    console.log('tick |', val);
});

setTimeout(() => {
    sub1.unsubscribe();
}, 3 * TIME_INTERVAL);

let sub2;

setTimeout(() => {
    sub2 = subject.subscribe((val) => {
        console.log('tack |    ', val);
    });
}, 10 * TIME_INTERVAL);

setTimeout(() => {
    sub2.unsubscribe();
}, 15 * TIME_INTERVAL);

let sub3;

setTimeout(() => {
    sub3 = subject.subscribe(
        (val) => {
            console.log('tuck |        ', val);
        },
        () => {
        },
        () => {
            console.log('--- done');
        }
    );
}, 30 * TIME_INTERVAL);

startEmitting();


