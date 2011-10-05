var sessions = require('../dynamic/session_manager')
var crypto = require('crypto')
var mongoose = require('mongoose')

var Player = mongoose.model('player')

exports.controller = {
    login: function(params, respond) {
        var cred = decrypt(params.credentials).split(':')
        Player.findOne({ $or: [{ email: cred[0] }, { user : cred[0] }] }, function(err, player) {
            if (!player || !player.test_password(cred[1]))
                return respond({ status: 'error', reason: 'invalid_login' })
            sessions.create(player)
            respond({ status: 'ok', response: player._id })
        })
    },
    
    logout: function(params, respond) {
        sessions.destroy(params.id)
        respond({ status: 'ok', response: {} })
    }
}

function decrypt(data) {
    var algorithm = 'aes-256-ecb'
    var key = hex_to_byte('e1f2d17e6083fdd6952cf32248b4e403e2a86c8912485b823414c73365e748d1')
    var decipher = crypto.createDecipheriv(algorithm, key, '')
    var result = decipher.update(data, 'hex', 'utf8')
    result += decipher.final('utf8')
    return result
}

function hex_to_byte(str) {
    var buffer = new Buffer(str.length / 2)
    for (var i = 0; i < str.length; i += 2)
        buffer[i / 2] = eval('0x' + str.substr(i, 2))
    return buffer.toString('binary')
}
