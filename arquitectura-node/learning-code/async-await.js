const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return resolve('Hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 500);
})

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log(`Message ${msg}`);
    } catch (err) {
        console.log(`Error ${err}`)
    }
}

asyncAwait();