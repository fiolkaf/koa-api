import KoaServer from './koa-server';

var expect = require("unexpected/unexpected");

describe('koa-server', () => {
	describe('constructor', () => {
		it('can create server', () => {
			let server = new KoaServer();
			expect(server, 'to be defined');
		});
	});
	describe('koa-server', () => {
		var server;
		afterEach(() => {
			server && server.release();
		});
		it('can start server', () => {
			server = new KoaServer();
			server.listen();
		});
		it('can stop server', () => {
			server = new KoaServer();
			server.listen();
			server.release();
		});
	});
	describe('routes', () => {
		it('can add http route', () => {
			let server = new KoaServer();
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
