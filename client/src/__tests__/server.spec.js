const routes = require('../../../server/routes.js');
const express = require('express');
const moxios = require('moxios');
const request = require('supertest');
const bodyParser = require('body-parser');
const path = require('path');

const initApp = () => {
  const app = express();
  app.use(routes);
  return app;
};

describe('GET /rooms/11', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('it should fetch data from the database', () => {
    moxios.stubRequest('/api/rooms/11', {
      status: 200,
      response: {
        data: [
          {
            booking_id: 488,
            check_in: '2018-11-10T05:00:00.000Z',
            length_of_stay: 5,
          },
          {
            booking_id: 489,
            check_in: '2018-12-19T05:00:00.000Z',
            length_of_stay: 5,
          },
          {
            booking_id: 490,
            check_in: '2019-02-07T05:00:00.000Z',
            length_of_stay: 1,
          },
          {
            booking_id: 491,
            check_in: '2019-01-31T05:00:00.000Z',
            length_of_stay: 2,
          },
          {
            booking_id: 492,
            check_in: '2018-11-27T05:00:00.000Z',
            length_of_stay: 1,
          },
          {
            booking_id: 493,
            check_in: '2019-02-19T05:00:00.000Z',
            length_of_stay: 2,
          },
          {
            booking_id: 494,
            check_in: '2019-02-21T05:00:00.000Z',
            length_of_stay: 7,
          },
          {
            booking_id: 495,
            check_in: '2018-11-29T05:00:00.000Z',
            length_of_stay: 6,
          },
          {
            booking_id: 496,
            check_in: '2019-02-26T05:00:00.000Z',
            length_of_stay: 6,
          },
          {
            booking_id: 497,
            check_in: '2019-02-06T05:00:00.000Z',
            length_of_stay: 4,
          },
          {
            booking_id: 498,
            check_in: '2019-01-17T05:00:00.000Z',
            length_of_stay: 2,
          },
          {
            booking_id: 499,
            check_in: '2019-01-19T05:00:00.000Z',
            length_of_stay: 5,
          },
          {
            booking_id: 500,
            check_in: '2019-02-10T05:00:00.000Z',
            length_of_stay: 5,
          },
        ],
        room_info: [
          {
            created_at: '2018-11-01T18:57:52.000Z',
            defaults_to_available: 1,
            id: 55,
            minimum_stay: 5,
            updated_at: '2018-10-27T02:57:14.000Z',
          },
        ],
      },
    });
    const app = initApp();
    return request(app)
      .get('/api/rooms/55')
      .then(fakeRes => {
        expect(fakeRes.body).toEqual({
          data: [
            {
              booking_id: 488,
              check_in: '2018-11-10T05:00:00.000Z',
              length_of_stay: 5,
            },
            {
              booking_id: 489,
              check_in: '2018-12-19T05:00:00.000Z',
              length_of_stay: 5,
            },
            {
              booking_id: 490,
              check_in: '2019-02-07T05:00:00.000Z',
              length_of_stay: 1,
            },
            {
              booking_id: 491,
              check_in: '2019-01-31T05:00:00.000Z',
              length_of_stay: 2,
            },
            {
              booking_id: 492,
              check_in: '2018-11-27T05:00:00.000Z',
              length_of_stay: 1,
            },
            {
              booking_id: 493,
              check_in: '2019-02-19T05:00:00.000Z',
              length_of_stay: 2,
            },
            {
              booking_id: 494,
              check_in: '2019-02-21T05:00:00.000Z',
              length_of_stay: 7,
            },
            {
              booking_id: 495,
              check_in: '2018-11-29T05:00:00.000Z',
              length_of_stay: 6,
            },
            {
              booking_id: 496,
              check_in: '2019-02-26T05:00:00.000Z',
              length_of_stay: 6,
            },
            {
              booking_id: 497,
              check_in: '2019-02-06T05:00:00.000Z',
              length_of_stay: 4,
            },
            {
              booking_id: 498,
              check_in: '2019-01-17T05:00:00.000Z',
              length_of_stay: 2,
            },
            {
              booking_id: 499,
              check_in: '2019-01-19T05:00:00.000Z',
              length_of_stay: 5,
            },
            {
              booking_id: 500,
              check_in: '2019-02-10T05:00:00.000Z',
              length_of_stay: 5,
            },
          ],
          room_info: [
            {
              created_at: '2018-11-01T18:57:52.000Z',
              defaults_to_available: 1,
              id: 55,
              minimum_stay: 5,
              updated_at: '2018-10-27T02:57:14.000Z',
            },
          ],
        });
      });
  });
});
