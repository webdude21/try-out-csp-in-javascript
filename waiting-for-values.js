let { go, chan, take, putAsync } = require('js-csp');

let ch = chan();

go(function* () {
    console.log("Waiting for something to come out of the channel!");
    const received = yield take(ch);
    console.log('RECEIVED:', received);
});

const text = 'something';
console.log('SENDING:', text);

// use putAsync to put a value in a
// channel from outside a process
putAsync(ch, text);
console.log("added something to the channel asynchronously!")