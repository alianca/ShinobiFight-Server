var sessions = {}

exports.get = function(player_id) {
    return sessions[player_id]
}

exports.create = function(player) {
    sessions[player._id] = player
}

exports.destroy = function(player_id) {
    if (sessions[player_id]) {
        sessions[player_id].cleanly_save()
        delete sessions[player_id]
    }
}

exports.broadcast = function(message) {
    for (var s in sessions)
        sessions[s].add_message('admin', message)
}
