const asyncCallback = function(cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return cb(null, 'Hello world');
        } else {
            cb(new Error('hello error'));
        }
    }, 2000);
}

asyncCallback((err, message) => {
    if (err) {
        console.log(`Error ${err}`);
    } else {
        console.log(`Message ${message}`);
    }
});