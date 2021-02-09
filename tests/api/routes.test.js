const supertest = require('supertest');
const app = require('../../index'); // Link to your server file

const request = supertest(app);

describe('GET /api/shipments', () => {
  it('responds with json and 200 if successful', async (done) => {
    const response = await request.get('/api/shipments');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
    done();
  });
});

describe('POST /api/shipments', () => {
  it('responds with json and 200 if successful', async (done) => {
    const response = await request.post('/api/shipments');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Added Shipment');
    done();
  });
});
