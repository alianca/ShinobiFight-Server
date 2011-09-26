var mongoose = require('mongoose')
var Clan = mongoose.model('clan')

exports.controller = {
    list: function(params, respond) {
        Clan.find({}, function(err, clans) {
            respond({ status: 'ok', response: clans })
        })
    }
}
