const Categorie = require('./controllers/index')

module.exports = function(app, requireAuth, requireAdmin) {
    app.post('/api/categorie', requireAuth, Categorie.insert);
    app.get('/api/categorie', requireAuth, Categorie.fetch);
    app.get('/api/categorie/:id', requireAuth, Categorie.get);
    app.put('/api/categorie/:id', requireAuth, Categorie.update);
}