var battles = {}

exports.create = function(player_a, player_b) {
    var battle_id = player_a._id + ':' + player_b._id
    battles[battle_id] = {
        players: {},
        turn: player_a._id,
        winner: null
    }
    battles[battle_id].players[player_a._id] = player_a
    battles[battle_id].players[player_b._id] = player_b
    
    // Restaura participantes
    player_a.reset_status()
    player_b.reset_status()
    
    return battle_id
}

exports.get = function(battle_id) {
    return battles[battle_id]
}

exports.destroy = function(battle_id) {
    delete battles[battle_id]
}
