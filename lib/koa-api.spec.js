import KoaApi from './koa-api';
import request from 'co-request';
import expect from 'unexpected/unexpected';

describe('koa-api', () => {
    'use strict';

    describe('constructor', () => {
        it('can create server', () => {
            let server = new KoaApi();
            expect(server, 'to be defined');
        });
    });
    describe('koa-server', () => {
        it('can start and stop the server', () => {
            let server = new KoaApi();
            server.listen();
            server.release();
        });
    });
    describe('routes', () => {
        it('can add http route', function*() {
            let server = new KoaApi();
            server.addRoute({
                method: 'GET',
                uri: '/status',
                handler: function*(next) {
                    this.body = 'ok';
                    yield next;
                },
            });
            server.listen();
            let response = yield request.get('http://localhost:8080/status');
            expect(response.statusCode,'to equal', 200);
            expect(response.body,'to equal', 'ok');
            server.release();
        });
    });
});
