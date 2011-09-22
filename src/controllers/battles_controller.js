var controller = require('../helpers/controller');
var sessions = require('../helpers/session_manager');
var battles = require('../helpers/battle_manager');

var queue = {};

exports.BattlesController = controller.createController('battles', {
    GET: {
        find_match: function(request, params, respond) {
            var player = sessions.get(params.id);
            if (player) {
                var level = player.get_level();
                var min_level = Math.max(params.min_level, level - 5);
                var max_level = Math.min(params.max_level, level + 5);
                var match = search_match(min_level, max_level, level);
                if (match) {
                    var battle_id = battles.create(match.player, player);
                    queue[match.player._id] = { status: 'started', battle: battle_id, opponent: player._id };
                    respond({
                        status: 'ok',
                        response: { status: 'started', battle: battle_id, opponent: match.player._id  }
                    });
                } else {
                    var q_entry = {
                        player: player,
                        min_level: min_level,
                        max_level: max_level,
                        status: 'waiting'
                    };
                    queue[player._id] = q_entry;
                    respond({ status: 'ok', response: q_entry });
                }
            } else {
                respond({ status: 'error', reason: 'invalid_player' });
            }
        },

        battle_status: function(request, params, respond) {
            respond({ status: 'ok', response: battles.get(params.battle_id) });
        },

        queue_status: function(request, params, respond) {
            var entry = queue[params.id];
            if (entry.status == 'started') delete queue[params.id];
            respond({ status: 'ok', response: entry });
        }
    },

    POST: {
        cancel: function(request, params, respond) {
            if (queue[params.player_id]) delete queue[params.player_id];
            respond({ status: 'ok', response: {} });
        },

        use_skill: function(request, params, respond) {
            var attacker = sessions.get(params.attacker_id);
            var attacked = sessions.get(params.attacked_id);
            var battle = battles.get(params.battle_id);

            if (!battle) respond({ status: 'error', reason: 'invalid_battle' });
            else if (!(attacker && attacked)) respond({ status: 'error', reason: 'invalid_players' });
            else if (attacker._id != battle.turn) respond({ status: 'error', reason: 'wrong_turn' });

            else attacker.get_skill(params.skill_id, function(skill) {
                if (skill) {
                    var results = skill.compute_damage(attacker, attacked);
                    if (results) {
                        if (attacked.status.hp == 0) battle.winner = attacker._id;
                        battle.turn = attacked._id;
                        respond({ status: 'ok', response: results });
                    } else {
                        respond({ status: 'error', reason: 'cooldown' });
                    }
                } else {
                    respond({ status: 'error', reason: 'invalid_skill' });
                }
            });
        }
    }
});

function search_match(min_level, max_level, level) {
    for (var i in queue)
        if (matches(queue[i], min_level, max_level, level))
            return queue[i];

    return null;
}

function matches(candidate, min_level, max_level, level) {
    return candidate.status == 'waiting' &&
           candidate.player.level >= min_level && candidate.player.level <= max_level &&
           candidate.min_level <= level && candidate.max_level >= level;
}
