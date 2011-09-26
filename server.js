var http = require('http')
var mongoose = require('mongoose')
var config = require('./config').config
var manager = require('./src/manager')

mongoose.connect('mongodb://' + config.db.address + ':' + config.db.port + '/shinobi')

http.createServer(manager.handle_request).listen(config.server_port)
