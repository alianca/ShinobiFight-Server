var controllers = [
    'players',
    'battles',
    'authentication',
    'chat',
    'clans'
]

for (i in controllers) 
    exports[controllers[i]] = require('./' + controllers[i]).controller
