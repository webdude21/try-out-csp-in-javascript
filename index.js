let { go, timeout } = require('js-csp');

go(function* () {
    yield timeout(1000);
    console.log('something else after 1 second!');
});

console.log('something!');
