
let server = new KoaServer('./api');
server.on('request:start', msg => console.log(msg));
server.on('request:end', err => console.log(err)):
