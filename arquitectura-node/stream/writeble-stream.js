const { Writable } = require('stream')

const writableStream = new Writable({
    write(chuck, encoding, callback) {
        console.log(chuck.toString());
        callback();
    }
})

process.stdin.pipe(writableStream);