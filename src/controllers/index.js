var controllers = [
    require('./players_controller').PlayersController,
    require('./battles_controller').BattlesController,
    require('./authentication_controller').AuthenticationController,
    require('./clans_controller').ClansController
];

var index = {};

for (var i = 0; i < controllers.length; i++) {
    index[controllers[i].root] = controllers[i];
}

exports.controllers = index;
