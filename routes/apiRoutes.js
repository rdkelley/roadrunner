module.exports = (app) => {
  app.get('/api/shipments', (req, res) => {
    res.json({ message: 'Hello World' });
  });

  app.post('/api/shipments', (req, res) => {
    res.json({ message: 'Added Shipment' });
  });
};
