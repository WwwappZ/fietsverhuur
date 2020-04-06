const Leverancier = require('./controllers/index')

module.exports = function(app, requireAuth, requireAdmin) {
    app.post('/api/admin/leverancier', requireAuth, Leverancier.insert);
    app.get('/api/admin/leverancier', requireAuth, Leverancier.fetch);
    app.get('/api/admin/leverancier/:id', requireAuth, Leverancier.get);
    app.put('/api/admin/leverancier/:id', requireAuth, Leverancier.update);
}