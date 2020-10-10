const { Readable } = require('stream')

const redacleStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentChatCode > 90) {
                this.push(null);
                return
            }

            this.push(String.fromCharCode(this.currentChatCode++));
        }, 200)
    }
});

// redacleStream.push(`${0/0} `.repeat(10).concat('Batman, Batman'));
// redacleStream.push(null);

redacleStream.currentChatCode = 65;
redacleStream.pipe(process.stdout);