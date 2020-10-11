const fs = require('fs');

// const out = fs.createWriteStream("./logs_log.log");
// const err = fs.createWriteStream("./logs_err.log");

const colors = {
    msgColor: '\x1b[37m',
    infoColor: '\x1b[34m',
    SuccColor: '\x1b[32m',
    warnColor: '\x1b[33m',
    errrColor: '\x1b[31m'
}

const loggerConsole = new console.Console({
    // stdout: out,
    // stderr: err,
    stdout: process.stdout,
    stderr: process.stderr,
});

const date = () => {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let time = date.toTimeString().substring(0, 9);

    return `${day < 10 ? 0 + day : day}/${month < 10 ? 0 + month : month}/${year} - ${time}`;
}

loggerConsole.info = (msg = '') => {
    console.info(`${colors.infoColor}[INFO] - ${date()} - ${msg}`);
}

loggerConsole.error = (msg = '') => {
    console.info(`${colors.errrColor}[ERROR] - ${date()} - ${msg}`);
}

loggerConsole.warn = (msg = '') => {
    console.info(`${colors.warnColor}[WARNING] - ${date()} - ${msg}`);
}

loggerConsole.log = (msg = '') => {
    console.info(`${colors.msgColor}[LOG] - ${date()} - ${msg}`);
}

loggerConsole.success = (msg = '') => {
    console.info(`${colors.SuccColor }[SUCCESS] - ${date()} - ${msg}`);
}


//outputs
loggerConsole.log("todo good");
loggerConsole.success("Success");
loggerConsole.warn("Advertencia")
loggerConsole.error("error en el server")