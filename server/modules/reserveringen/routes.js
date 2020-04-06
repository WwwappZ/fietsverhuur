const Reserveringen = require('./controllers/index')

module.exports = function(app, requireAuth, requireAdmin) {
    app.post('/api/reserveringen', requireAuth, Reserveringen.insert);
    app.get('/api/reserveringen', requireAuth, Reserveringen.fetch);
    app.get('/api/reserveringen/:id', requireAuth, Reserveringen.get);
    app.put('/api/reserveringen/:id', requireAuth, Reserveringen.update);
}