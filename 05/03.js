const Rx = require('rxjs/Rx');
const subject = new Rx.Subject();
const TIME_INTERVAL = 200;

const padding = value => `${value < 10 ? '0' : ''}${value}`

function startEmitting() {
    let counter = 0;

    const interval = setInterval(() => {
        if (counter >= 20) {
            clearInterval(interval);
        }

        subject.next(padding(counter++));

    }, TIME_INTERVAL);
}

subject.subscribe((val) => {
    console.log('tick |', val);
});

setTimeout(() => {
    subject.subscribe((val) => {
        console.log('tack |    ', val);
    });
}, 3 * TIME_INTERVAL);

let subscription3;

setTimeout(() => {
    subscription3 = subject.subscribe((val) => {
        console.log('tuck |        ', val);
    });
}, 6 * TIME_INTERVAL);

setTimeout(() => {
    subscription3.unsubscribe();
}, 10 * TIME_INTERVAL);

startEmitting();


