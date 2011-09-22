var controller = require('../helpers/controller');
var sessions = require('../helpers/session_manager');
var crypto = require('crypto');
var models = require('../models').models;
var Player = models.Player;

exports.AuthenticationController = controller.createController('authentication', {
    GET: {
        login: function(request, params, respond) {
            var credentials = decrypt(params.credentials).split(':');
            Player.find({ name: credentials[0] }, function(err, docs) {
                if (err) {
                    respond({ status: 'error', reason: 'invalid_login' });
                } else {
                    var player = docs[0];
                    if (player && player.validate_password(credentials[1])) {
                        sessions.create(player);
                        respond({ status: 'ok', response: player._id });
                    } else {
                        respond({ status: 'error', reason: 'invalid_login' });
                    }
                }
            });
        },

        logout: function(request, params, respond) {
            sessions.destroy(params.id);
            respond({ status: 'ok', response: {} });
        }
    }
});

function decrypt(data) {
    var algorithm = 'aes-256-ecb';
    var key = hex_to_byte('e1f2d17e6083fdd6952cf32248b4e403e2a86c8912485b823414c73365e748d1');
    var decipher = crypto.createDecipheriv(algorithm, key, '');
    var result = decipher.update(data, 'hex', 'utf8');
    result += decipher.final('utf8');
    return result;
}

function hex_to_byte(str) {
    var buffer = new Buffer(str.length / 2);
    for (var i = 0; i < str.length; i += 2) {
        buffer[i / 2] = eval('0x' + str.substr(i, 2));
    }
    return buffer.toString('binary');
}
