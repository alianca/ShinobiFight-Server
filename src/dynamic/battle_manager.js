var Battle = require('./battle').Battle

var battles = {}

exports.create = function(players) {
    var battle = new Battle(players)
    battles[battle.id] = battle
    return battle.id
}

exports.get = function(battle_id) {
    return battles[battle_id]
}

exports.destroy = function(battle_id) {
    delete battles[battle_id]
}
