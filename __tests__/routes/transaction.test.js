const supertest = require('supertest');
const db = require('../../data/db-config');
const server = require('../../api/app');

const Transaction = require('../../api/transaction/transactionModel');
const Profiles = require('../../api/profile/profileModel');
jest.mock('../../api/transaction/transactionModel');
jest.mock('../../api/profile/profileModel');

afterEach(async ()=>{
    await db('transactions').truncate();
})

describe('transactionRouter',()=>{
    it('can run test', ()=>{
        expect(true).toBeTruthy();
    })

    describe('POST /', ()=>{
        it('Should return http status code 201',()=>{
            const transaction = {
                profileId: "00ulthapbErVUwVJy4x6",
                categoryId: 2,
                amount: 2.3,
                merchant: "Target",
                date: "2/3/4023"
            }
            Transaction.findTransactionById.mockResolvedValue(undefined);
            Transaction.addTransaction.mockResolvedValue([
                Object.assign({ id: 1}, transaction)
            ])
            return supertest(server)
            .post('/api/transactions/').send(transaction).then(response=>{
                expect(response.status).toBe(201);
            })
        })

        it('should return http status code 400 if input is missing anything',()=>{
            const transaction = {
                profileId: "00ulthapbErVUwVJy4x6",
                amount: 2.3,
                merchant: "Target",
                date: "2/3/4023"
            }
            Transaction.findTransactionById.mockResolvedValue(undefined);
            return supertest(server)
            .post('/api/transactions/').send(transaction).then(response=>{
                expect(response.status).toBe(400);
            })
        })

        it('should return http status code 400 if input has a wrong data type', ()=>{
            const transaction = {
                profileId: "00ulthapbErVUwVJy4x6",
                categoryId: "2",
                amount: 2.3,
                merchant: "Target",
                date: "2/3/4023" 
            }
            return supertest(server)
            .post('/api/transactions/').send(transaction).then(response=>{
                expect(response.status).toBe(400);
            })
        })
    })

    describe('GET /:id', ()=>{
        it('should return http status code 200 on success',()=>{
            return supertest(server)
            .get('/api/transactions/8').then(response=>{
                expect(response.status).toBe(200)
            })
        })

        it('should return http status code 404 if the id does not exist',()=>{
            return supertest(server)
            .get('/api/transaction/256').then(response=>{
                expect(response.status).toBe(404)
            })
        })
    })

    describe('PUT /:id',()=>{
        it('should return http status code 200 on success',()=>{
            const transaction = {
                id: 1,
                profileId: "00ulthapbErVUwVJy4x6",
                categoryId: 2,
                amount: 2.3,
                merchant: "Walmart",
                date: "2/3/4023" 
            }
            Transaction.findTransactionById.mockResolvedValue(transaction);
            Transaction.updateTransaction.mockResolvedValue([transaction])

            return supertest(server)
            .put('/api/transactions/1').send(transaction).then(response=>{
                expect(response.status).toBe(200)
            })
        })
    })
})