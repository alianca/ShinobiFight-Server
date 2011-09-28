var sessions = require('../helpers/session_manager')

exports.controller = {
    send: function(params, respond) {
        var sender = sessions.get(params.sender_id)
        var target = sessions.get(params.target_id)
        if (!sender || !target) return respond({ status: 'error', reason: 'invalid_id' })
        if (!validate(params.message)) return respond({ status: 'error', reason: 'bad_word' })
        target.messages.push({ type: 'enemy', content: params.message })
        respond({ status: 'ok', response: {} })
    },

    check: function(params, respond) {
        var player = sessions.get(params.player_id)
        if (!player) return respond({ status: 'error', reason: 'player_offline' })
        respond({ status: 'ok', response: player.messages })
        player.messages = []
    }
}

var bad_words = [
    /microsoft/ig
]

function validate(message) {
    for (i in bad_words)
        if (bad_words[i].test(message))
            return false
    return true
}
