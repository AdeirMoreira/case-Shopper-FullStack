import request from 'supertest';

describe('Teste ponta a ponta da API', () => {
    describe('Teste da entidade Order', () => {
        
    })

    describe('Teste da entidade Stock', () => {
        it('teste endpoint getAll', async () => {
            const {body,status} = await request('http://localhost:3003/stock').get('/all')
            expect(status).toBe(200)
            expect(body).toBeInstanceOf(Array)
            expect(body).toHaveLength(50)
        })
        it('teste endpoint update', async () => {
            const {body,status} = await request('http://localhost:3003/stock')
            .patch('/update')
            .send({"id":"fcb35c21-ab15-49c3-847e-fe987409591b","qty_purchased": 100})

            expect(status).toBe(200)
            // expect(body).toBeInstanceOf(Array)
            // expect(body).toHaveLength(50)
        })
    })

    
})