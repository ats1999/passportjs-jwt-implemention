const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../index');
require('../../../config/db');
const authToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjEzZjdiZmM0YTRlMmMxMGM5MzI3NiIsImVtYWlsIjoicmt0ODIyMjRAZ21haWwuY29tIiwiaWF0IjoxNjE3MDMzMDk5fQ.g5sonOPPaePcnYwrhRXDOcqX_-MQqu5f5sMbAMwzfi4';

describe('POST /api/admin/job/create',()=>{
    it('Create a new Job',(done)=>{
        request(app)
        .post('/api/admin/job/create')
        .send({
            description:"Testing using mocha..",
            assignedTo:"60614073fc4a4e2c10c9327b"
        })
        .set('Authorization',authToken)
        .expect(200)
        .then((res)=>{
            const body = res.body;
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('description');
            expect(body).to.contain.property('assignedTo');
            expect(body).to.contain.property('createdBy');
            done();
        })
        .catch(err=>{
            console.log(err);
            done(err);
        })
    })
})