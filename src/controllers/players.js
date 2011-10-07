var sessions = require('../dynamic/session_manager')
var mongoose = require('mongoose')

var Player = mongoose.model('player')

exports.controller = {
    player_data: function(params, respond) {
        console.log(params)
        var player = sessions.get(params.player_id)
        if (!player) return respond({ status: 'error', reason: 'invalid_player' })
        respond({ status: 'ok', response: {
            name: player.name,
            experience: player.experience,
            level: player.level,
            clan: player.clan,
            attributes: player.attributes,
            skills: player.skills,
            effects: player.effects
        } })
    },
    
    create: function(params, respond) {
        var player = new Player(params.player)
        player.save(function(err) {
            if (err) respond({ status: 'error', reason: 'already_exists' })
            else respond({ status: 'ok', response: player })
        })
    },
    
    set_clan: function(params, respond) {
        var player = sessions.get(params.player_id)
        if (player) player.clan = params.clan_id
        respond({ status: 'ok', response: {} })
    }
}
