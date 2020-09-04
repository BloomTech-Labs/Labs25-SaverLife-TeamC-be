const request = require('supertest');
const express = require('express');
const Budgets = require('../../api/budget/budgetModel');
const budgetRouter = require('../../api/budget/budgetRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/budget/budgetModel');
// mock the auth middleware completely
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('budgets router endpoints', () => {
  beforeAll(() => {
    // This is the module/route being tested
    server.use(['/budget', '/budgets'], budgetRouter);
    jest.clearAllMocks();
  });

  describe('GET /budgets/:id', () => {
    it('should return 200 when profile found', async () => {
      Budgets.getBudgetById.mockResolvedValue({
        id: 1,
        profileId: '00ulthapbErVUwVJy4x6',
      });
      const res = await request(server).get('/budget/1');

      expect(res.status).toBe(200);
      expect(res.body.profileId).toBe('00ulthapbErVUwVJy4x6');
    });

    it('should return 404 when no budget is found', async () => {
      Budgets.getBudgetById.mockResolvedValue();
      const res = await request(server).get('/budgets/1');

      expect(res.status).toBe(404);
    });
  });

  describe('POST /budget', () => {
    it('should return 200 when budget is created', async () => {
      const budget = {
        profileId: '00ulthapbErVUwVJy4x6',
      };
      Budgets.getBudgetById.mockResolvedValue();
      Budgets.addBudget.mockResolvedValue([Object.assign({ id: 1 }, budget)]);
      const res = await request(server).post('/budgets').send(budget);

      expect(res.status).toBe(201);
    });
  });

  describe('PUT /budget/:id', () => {
    it('should return 200 when budget is updated', async () => {
      const budget = {
        id: 1,
        profileId: '00ulthapbErVUwVJy4x6',
      };
      Budgets.getBudgetById.mockResolvedValue(budget);
      Budgets.updateBudgetById.mockResolvedValue([budget]);

      const res = await request(server).put('/budget/1').send(budget);
      expect(res.status).toBe(200);
    });
  });

  describe('DELETE /budget/:id', () => {
    it('should return 200 when budget is deleted', async () => {
      Budgets.deleteBudgetById.mockResolvedValue(1);

      const res = await request(server).delete('/budget/1');
      expect(res.status).toBe(200);
      expect(res.body.removed).toBe(1);
    });
  });
});
