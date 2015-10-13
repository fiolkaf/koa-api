'use strict';

import koa from 'koa';
import koaRouter from 'koa-router';

const DEFAULT_OPTIONS = {
    port: 8080
};

export default class KoaApi {
    constructor(options = DEFAULT_OPTIONS) {
        this._port = options.port || DEFAULT_OPTIONS.port;
        this._app = koa();
        this._app.on('error', (err, ctx) => console.error('server error', err, ctx));
    }

    listen() {
        this._server = this._app.listen(this._port);
    }

    addRoute(route) {
        let router = koaRouter()[route.method.toLowerCase()](route.uri, route.handler);
        this._app.use(router.routes());
    }

    release() {
        if (!this._server) {
            return;
        }
        this._server.close();
    }
};
