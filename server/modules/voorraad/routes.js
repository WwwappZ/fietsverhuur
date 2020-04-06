const Voorraad = require('./controllers/index')

module.exports = function(app, requireAuth, requireAdmin) {
    app.post('/api/voorraad', requireAuth, Voorraad.insert);
    app.get('/api/voorraad', requireAuth, Voorraad.fetch);
    app.get('/api/voorraad/:id', requireAuth, Voorraad.get);
    app.put('/api/voorraad/:id', requireAuth, Voorraad.update);
}