module.exports = (app) => {
  app.get('/api/shipments', (req, res) => {
    res.send('Hello World');
  });
};
