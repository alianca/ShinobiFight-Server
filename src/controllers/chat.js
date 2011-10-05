var sessions = require('../dynamic/session_manager')

exports.controller = {
    send: function(params, respond) {
        if (validate(params.message)) return respond({ status: 'error', reason: 'bad_word' })
        
        if (params.sender_id == 'admin') sessions.broadcast(params.message)
        else {
            var sender = sessions.get(params.sender_id)
            var target = sessions.get(params.target_id)
            if (!sender || !target) return respond({ status: 'error', reason: 'player_offline' })
            target.add_message('enemy', params.message)
        }
        respond({ status: 'ok', response: {} })
    },
    
    check: function(params, respond) {
        var player = sessions.get(params.player_id)
        if (!player) return respond({ status: 'error', reason: 'player_offline' })
        respond({ status: 'ok', response: player.messages })
        player.status.messages = []
    }
}

function validate(message) {
    // bad word list goes here
    var bad_words = /(microsoft)/ig
    
    return bad_words.exec(message)
}
