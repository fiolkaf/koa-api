import koa from 'koa';

const DEFAULT_OPTIONS = {
	path: '.',
	port: 80
};

export default class KoaApi {
	constructor(options = DEFAULT_OPTIONS) {
		this._path = options.path || DEFAULT_OPTIONS.path;
		this._port = options.port || DEFAULT_OPTIONS.port;
		this._app = koa();
	}

	listen() {
		this._server = this._app.listen(this._port);
	}

	addRoute(route) {

	}

	release() {
		if (!this._server) {
			return;
		}
		this._server.close();
	}
};
