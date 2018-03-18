let { go, chan, take, put } = require('js-csp');

let chA = chan();
let chB = chan();

// Process A
go(function* () {
    const receivedFirst = yield take(chA);
    console.log('A > RECEIVED:', receivedFirst);

    const sending = 'cat';
    console.log('A > SENDING:', sending);
    yield put(chB, sending);

    const receivedSecond = yield take(chA);
    console.log('A > RECEIVED:', receivedSecond);
});

// Process B
go(function* () {
    const sendingFirst = 'dog';
    console.log('B > SENDING:', sendingFirst);
    yield put(chA, sendingFirst);

    const received = yield take(chB);
    console.log('B > RECEIVED:', received);

    const sendingSecond = 'another dog';
    console.log('B > SENDING:', sendingSecond);
    yield put(chA, sendingSecond);
});