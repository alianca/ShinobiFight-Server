var qs = require('querystring');

exports.createController = function(root, routes) {
    var controller = function(req, res) {
        this.request = req;
        this.response = res;

        this.call = function(req, respond) {
            var func = controller.routes[req.method][req.url.match(/^\/[a-z_]+\/([a-z_]+)[\?\/]*/)[1]];
            if (func) {
                var data = '';
                req.on('data', function(chunk) {
                    data += chunk;
                });
                req.on('end', function() {
                    var parts = req.url.split('?');
                    var params = req.method == 'POST' ? JSON.parse(data) : qs.parse(parts[1], '&', '=');
                    console.log('  [Parameters]: ' + JSON.stringify(params));
                    func(req, params, respond);
                });
            } else {
                respond(null);
            }
        };
    };

    controller.root = root;
    controller.routes = routes;

    return controller;
};
