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
        this._server = this._app.listen(this._port, (err, done) => console.log('done', err, done));
    }

    addRoute(route) {
        let method = route.method.toLowerCase();
        let router = koaRouter()[method](route.uri, route.handler);
        this._app.use(router.routes());
    }

    release() {
        this._server.close();
    }
};
