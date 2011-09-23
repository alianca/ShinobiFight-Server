var controller = require('../helpers/controller');
var sessions = require('../helpers/session_manager');
var handle_errors = require('../helpers/error_handler').handle;
var Player = require('../models').models.Player;

exports.PlayersController = controller.createController('players', {

    GET: {
        player_data: function(request, params, respond) {
            var player = sessions.get(params.id);
            if (!player) return handle_errors(['invalid_player'], respond);

            var data = {
                name: player.name,
                clan: player.clan,
                level: player.get_level(),
                experience: player.experience,
                attributes: player.get_attributes()
            };

            player.get_skills(function(skills) {
                data.skills = skills;
                respond({ status: 'ok', response: data });
            });
        }
    },

    POST: {
        create: function(request, params, respond) {
            var p = new Player(params.player);
            p.save(function(err) {
                if (err) return handle_errors(err.errors, respond);
                respond({ status: 'ok', response: p });
            });
        },

        set_clan: function(request, params, respond) {
            console.log(params.player_id);
            var player = sessions.get(params.player_id);
            if (!player) return handle_errors(['invalid_player'], respond);
            
            player.set_clan(params.clan_id);
            respond({ status: 'ok', response: {} });
        }
    }
});
