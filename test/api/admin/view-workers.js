const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../index');
require('../../../config/db');
const authToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjE0MDczZmM0YTRlMmMxMGM5MzI3YiIsImVtYWlsIjoiYmRldmdAZ21haWwuY29tIiwiaWF0IjoxNjE3MDMzODUwfQ.01OjTEUD4uKbfZbwSKAvDNRplif58CzfW2bv85XgUAQ';

describe('GET /api/admin/view/workers',()=>{
    it('View all registered workers',(done)=>{
        request(app)
        .get('/api/admin/view/workers')
        .set('Authorization',authToken)
        .expect(200)
        .then((res)=>{
            const body = res.body;
            expect(body).to.be.an('array');
            done();
        })
        .catch(err=>{
            console.log(err);
            done(err);
        })
    })
})