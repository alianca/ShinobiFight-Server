var controller = require('../helpers/controller');
var models = require('../models').models;
var Clan = models.Clan;

exports.ClansController = controller.createController('clans', {
    GET: {
        list: function(request, params, respond) {
            Clan.find({}, function(err, docs) {
                respond({ status: 'ok', response: docs });
            });
        }
    }
});
