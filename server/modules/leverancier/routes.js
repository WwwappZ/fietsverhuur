const Leverancier = require('./controllers/index')

module.exports = function(app, requireAuth, requireAdmin) {
    app.post('/api/leverancier', requireAuth, Leverancier.insert);
    app.get('/api/leverancier', requireAuth, Leverancier.fetch);
    app.get('/api/leverancier/:id', requireAuth, Leverancier.get);
    app.put('/api/leverancier/:id', requireAuth, Leverancier.update);
}