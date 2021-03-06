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

startEmitting();


