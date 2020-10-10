const { Duplex } = require('stream')

const duplexStrean = new Duplex({
    write(chuck, encoding, callback) {
        console.log(chuck.toString());
        callback();
    },

    read(chuck) {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }

        this.push(String.fromCharCode(this.currentCharCode++))
    }
})


duplexStrean.currentCharCode = 65;
process.stdin.pipe(duplexStrean).pipe(process.stdout);