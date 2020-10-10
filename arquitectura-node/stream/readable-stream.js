const { Readable } = require('stream')

const redacleStream = new Readable();

redacleStream.push(`${0/0} `.repeat(10).concat('Batman, Batman'));
redacleStream.push(null);
redacleStream.pipe(process.stdout);