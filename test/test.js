var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        // request(app).get('/').expect('hello juan!', done);
        request(app).get('/hello').expect('hello world!', done)
    });
});