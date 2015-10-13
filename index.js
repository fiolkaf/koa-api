modules('.').routes()
    .apply(koa())
    .on('request:start', console.log.apply(msg))
    .on('request:end', console.log.apply(err))
    .on('error', koa.release);
