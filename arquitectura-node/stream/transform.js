const { Transform } = require('stream')

const transformString = new Transform({
    transform(chuck, encoding, callback) {
        this.push(chuck.toString().toUpperCase())
        callback();
    }
});

process.stdin.pipe(transformString).pipe(process.stdout)