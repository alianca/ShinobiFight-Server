var sessions = require('../helpers/session_manager')
var battles = require('../helpers/battle_manager')

var queue = {}

exports.controller = {
    find_match: function(params, respond) {
        var player = sessions.get(params.player_id)
        if (!player) return respond({ status: 'error', reason: 'invalid_player' })
        
        var level = player.get_level()
        var min_level = Math.max(params.min_level, level - 5)
        var max_level = Math.min(params.max_level, level + 5)
        var match = search_match(min_level, max_level, level)
        var response = match ? { 
            status: 'started', 
            battle: battles.create(match.player, player)
        } : {
            status: 'waiting',
            player: player,
            min_level: min_level,
            max_level: max_level
        }
        queue[match ? match.player._id : player._id] = response
        respond({ status: 'ok', response: response })
    },
    
    battle_status: function(params, respond) {
        respond({ status: 'ok', response: battles.get(params.battle_id) })
    },
    
    queue_status: function(params, respond) {
        var entry = queue[params.id]
        if (entry.status == 'started') delete queue[params.id]
        respond({ status: 'ok', response: entry })
    },

    cancel: function(params, respond) {
        if (queue[params.player_id]) delete queue[params.player_id]
        respond({ status: 'ok', response: {} })
    },
    
    use_skill: function(params, respond) {
        var attacker = sessions.get(params.attacker_id)
        var attacked = sessions.get(params.attacked_id)
        var battle = battles.get(params.battle_id)
        
        if (!battle) var error = 'invalid_battle'
        else if (!attacker || !attacked) var error = 'invalid_players'
        else if (attacker._id != battle.turn) var error = 'wrong_turn'
        if (error) return respond({ status: 'error', reason: error })
        
        attacker.get_skill(params.skill_id, function(skill) {
            if (!skill) return respond({ status: 'error', reason: 'invalid_skill' })
            var results = skill.get_damage(attacker, attacked)
            if (!results) return respond({ status: 'error', reason: 'cooldown' })
            if (attacked.status.hp == 0) battle.winner = attacker._id
            battle.turn = attacked._id
            respond({ status: 'ok', response: results })
        })
    }
}

function search_match(min_level, max_level, level) {
    for (var i in queue)
        if (matches(queue[i], min_level, max_level, level))
            return queue[i]
    return null
}

function matches(candidate, min_level, max_level, level) {
    return candidate.status == 'waiting' &&
        candidate.player.level >= min_level && candidate.player.level <= max_level &&
        candidate.min_level <= level && candidate.max_level >= level
}
