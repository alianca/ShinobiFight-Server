var sessions = require('../helpers/session_manager')
var mongoose = require('mongoose')

var Player = mongoose.model('player')

exports.controller = {
    player_data: function(params, respond) {
        var player = sessions.get(params.id)
        if (!player) return respond({ status: 'error', reason: 'invalid_player' })
        var data = {
            name: player.name,
            clan: player.clan,
            level: player.level,
            experience: player.experience,
            attributes: player.get_attributes()
        }
        player.get_skills(function(skills) {
            data.skills = skills
            respond({ status: 'ok', response: data })
        })
    },
    
    create: function(params, respond) {
        var player = new Player(params.player)
        player.save(function(err) {
            if (err) respond({ status: 'error', reason: err.errors })
            else respond({ status: 'ok', response: player })
        })
    },
    
    set_clan: function(params, respond) {
        var player = sessions.get(params.player_id)
        if (player) player.clan = params.clan_id
        respond({ status: 'ok', response: {} })
    }
}
