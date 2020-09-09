const request = require('supertest');
const express = require('express');
const GoalProgress = require('../../api/goalProgress/goalProgressModel');
const goalProgressRouter = require('../../api/goalProgress/goalProgressRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/goalProgress/goalProgressModel');
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('goalProgress router endpoints', () => {
  beforeAll(() => {
    // this tests the main route
    server.use(['/goalprogress'], goalProgressRouter);
    jest.clearAllMocks();
  });

  // this tests the post request to add a new goal progress
  describe('POST /goalprogress', () => {
    it('should return 201 when new goal progress is created', async () => {
      const goal = {
        profileId: 'zp9pzwo4j42qbu9kjniv',
        totalSaved: 17.36,
      };
      GoalProgress.addGoalProgress.mockResolvedValue();
      GoalProgress.addGoalProgress.mockResolvedValue([
        Object.assign({ id: 1 }, goal),
      ]);
      const res = await request(server).post('/goalprogress').send(goal);

      expect(res.status).toBe(201);
    });
  });

  // testing the get request for a specific goal progress
  describe('GET /goalprogress/:id', () => {
    it('should return 200 when goal progress is found', async () => {
      GoalProgress.getGoalProgressById.mockResolvedValue({
        id: 13
      });
      const res = await request(server).get('/goalprogress/13');
      expect(res.status).toBe(200);
    });

    it('should return 404 when no goal progress is found', async () => {
      GoalProgress.getGoalProgressById.mockResolvedValue();
      const res = await request(server).get('/goalprogress/70');
      expect(res.status).toBe(404);
    });
  });

  // this tests editing an existing goal progress
  describe('PUT /goalprogress/:id', () => {
    it('should return 200 when goal progress is updated', async () => {
      const editgoal = {
        id: 13,
        profileId: 'zp9pzwo4j42qbu9kjniv',
        totalSaved: 70.34,
      };
      GoalProgress.getGoalProgressById.mockResolvedValue(editgoal);
      GoalProgress.editGoalProgress.mockResolvedValue([editgoal]);

      const res = await request(server).put('/goalprogress/13').send(editgoal);
      expect(res.status).toBe(200);
    });
  });

  // this tests deleting a goal progress
  describe('DELETE /goalprogress/:id', () => {
    it('should return 200 when goal progress is deleted', async () => {
      GoalProgress.deleteGoalProgress.mockResolvedValue(1);

      const res = await request(server).delete('/goalprogress/1');
      expect(res.status).toBe(200);
      expect(res.body.removed).toBe(1);
    });
  });
});
