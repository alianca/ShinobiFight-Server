var sessions = {}

exports.get = function(player_id) {
    console.log(player_id)
    return sessions[player_id]
}

exports.create = function(player) {
    sessions[player._id] = player
    sessions[player._id].messages = []
};

exports.destroy = function(player_id) {
    delete sessions[player_id]
}
