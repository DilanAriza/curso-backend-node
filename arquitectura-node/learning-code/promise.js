const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return resolve('Hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 2000);
})

promise
    .then(message => message.toUpperCase())
    .then(message => console.log(`Message ${message}`))
    .catch(err => console.log(`Error ${err}`))