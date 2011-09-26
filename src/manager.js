require('./models')
var controllers = require('./controllers')
var fs = require('fs')
var qs = require('querystring')
var config = require('../config').config

exports.handle_request = function(req, res) {
    console.log('[Request]: ' + req.method + ' - ' + req.url)
    if (/^\/\w+\/\w+$/.test(req.url)) {
        var url = req.url.split('/')
        var controller = controllers[url[1]]
        if (!controller) return json_response(res, { status: 'error', reason: 'invalid_controller' })
        var action = controller[url[2]]
        if (!action) return json_response(res, { status: 'error', reason: 'invalid_action' })
        call(req, action, function(data) { json_response(res, data) })
    }
    else fs.readFile(config.public_dir + req.url, function(err, data) {
        res.writeHead(data ? 200 : 404, {
            'Content-Type': 'text/plain',
            'Content-Length': data ? data.length : 10
        })
        res.end(data || 'Not found')
    })
}

function json_response(res, response) {
    res.writeHead(200, { 'Content-Type': 'application/javascript' })
    response_str = JSON.stringify(response)
    console.log('  [Response]: ' + response_str)
    res.end(response_str)
}

function call(req, action, callback) {
    if (req.method == 'POST') {
        var data = ''
        req.on('data', function(chunk) { data += chunk })
        req.on('end', function() { action(JSON.parse(data), callback) })
    }
    else action(qs.parse(req.url.split('?'), '&', '='), callback)
}
