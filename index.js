koaApi()
    .on('request:start', console.log)
    .on('request:end', console.log)
    .on('error', console.error)
    .routes(modules('./api/v1'))
    .routes(modules('./api/v2'))
    .log('trace');
