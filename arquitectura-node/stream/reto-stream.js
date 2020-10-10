const { Transform } = require('stream')

const transformString = new Transform({
    transform(chuck, callback) {
        const data = chuck.toString();
        data.split(" ").map(word => {
            this.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
    }
});

process.stdin.pipe(transformString).pipe(process.stdout);