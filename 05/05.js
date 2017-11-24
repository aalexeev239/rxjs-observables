const Rx = require('rxjs/Rx');
const subject = new Rx.Subject();
const TIME_INTERVAL = 100;
const behaviourSubject = new Rx.BehaviorSubject('initial');

const padding = value => `${value < 10 ? '0' : ''}${value}`;

function startEmitting() {
    let counter = 0;

    const interval = setInterval(() => {
        if (counter >= 20) {
            clearInterval(interval);
        }

        const value = padding(counter++);

        subject.next(value);
        behaviourSubject.next(value);
    }, TIME_INTERVAL);
}

console.log('\n------------- subscribe1 -------------\n');
const sub1 = subject.subscribe((val) => {
    console.log('SUB: tick |', val);
});
const behSub1 = behaviourSubject.subscribe((val) => {
    console.log('                       BEH: tick |', val);
});

setTimeout(() => {
    sub1.unsubscribe();
    behSub1.unsubscribe();
}, 3 * TIME_INTERVAL);

let sub2;
let behSub2;

setTimeout(() => {
    console.log('\n------------- subscribe2 -------------\n');
    sub2 = subject.subscribe((val) => {
        console.log('SUB: tack |    ', val);
    });
    behSub2 = behaviourSubject.subscribe((val) => {
        console.log('                       BEH: tack |    ', val);
    });
}, 10 * TIME_INTERVAL);

setTimeout(() => {
    sub2.unsubscribe();
    behSub2.unsubscribe();
}, 15 * TIME_INTERVAL);

startEmitting();


