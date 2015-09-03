import KoaApi from './koa-api';

var expect = require("unexpected/unexpected");

describe('koa-api', () => {
	describe('constructor', () => {
		it('can create server', () => {
			let server = new KoaApi();
			expect(server, 'to be defined');
		});
	});
	describe('koa-server', () => {
		var server;
		afterEach(() => {
			server && server.release();
		});
		it('can start server', () => {
			server = new KoaApi();
			server.listen();
		});
		it('can stop server', () => {
			server = new KoaApi();
			server.listen();
			server.release();
		});
	});
	describe('routes', () => {
		it('can add http route', () => {
			let server = new KoaApi();
			server.addRoute({
				method: 'GET',
				uri: '/status',
				handler: function*() {}
			});
			server.listen();
			server.release();
		});
	});
});
