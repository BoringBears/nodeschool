//In this challenge, write an http server that uses a through stream to write back
//the request stream as upper-cased response data for POST requests.

    var http = require('http');
    var through = require('through2');
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(function(buf, _, next){
                this.push(buf.toString().toUpperCase());
                next();
            })).pipe(res);
        } else {
            res.end('\n');
        }
    });
    server.listen(parseInt(process.argv[2]));
