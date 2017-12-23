var through = require('through2');
var tr = through(write);
function write (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
}
process.stdin.pipe(tr).pipe(process.stdout);

