//%s - String
//%d - Number
//%i - parseInt(value, 10)
//%f - parseFloat(value)
//%j - JSON
//%o - Object
//%c - Css
//%% - signo de '%'

console.log("Un %s y un %s", "Perrito", "gatito");
// util.format("Un %s y un %s", "Perrito", "gatito");

//Es un sinonimo de console.log()
// console.info("Hello");


//Es un sinonimo de console.error()
// console.warn("Hello")

//Si falla lo muestra en pantalla, si no, no pasa nada
// console.assert(42 === "42");

//nos muestra en donde esta siendo ejecutado
// console.trace("Hello");


const utils = require("util");
const debuggin = utils.debuglog("foo");

debuggin("Hello from foo");