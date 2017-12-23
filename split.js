  var through2 = require('through2');
    var split = require('split');
var ln = 0;
    process.stdin.pipe(split()).pipe(through2(function (line, _, next) {
            ln++;
            if ((ln % 2) != 0) {
                this.push(line.toString().toLowerCase()+'\n');
            } else {
                this.push(line.toString().toUpperCase()+'\n');
            }
            next();
        })).pipe(process.stdout);
