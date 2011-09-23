var controllers = require('./controllers').controllers;
var fs = require('fs');
var config = require('../config').config;

exports.handleRequest = function(req, res) {
    var controller = null;

    console.log('[Request]: ' + req.method + ' - ' + req.url);

    if (/^\/[a-zA-Z0-9_\/]+\.[a-zA-Z0-9_]+/.test(req.url)) {
        fs.readFile(config.public_dir + req.url, function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                console.log('  [Response [File]]: ' + req.url + ' not found.');
                res.end('404 - Not Found');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Content-Length': data.length
                });
                console.log('  [Response [File]]: ' + req.url);
                res.end(data);
            }
        });
    } else {
        controller = controllers[req.url.match(/^\/([a-z_]+)\/.*/i)[1]];
        var response = '';
        if (controller) {
            var req_controller = new controller();
            req_controller.call(req, function(data) {
                if (data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response = JSON.stringify(data);
                } else {
                    res.writeHead(401, { 'Content-Type': 'application/javascript' });
                    response = JSON.stringify({ status: 'error', reason: 'invalid_action' });
                }
                console.log('  [Response]: ' + response);
                res.end(response);
            });
        } else {
            res.writeHead(401, { 'Content-Type': 'application/javascript' });
            response = JSON.stringify({ status: 'error', reason: 'invalid_controller' });
            console.log('  [Response]: Invalid Controller');
            res.end(response);
        }
    }
};
