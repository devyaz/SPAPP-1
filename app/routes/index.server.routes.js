module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    app.get('/groups', index.findAll);
    app.get('/groups/:id', index.findById);
};