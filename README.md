# koa-web-api

![alt tag](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrzbu0IxsmelfNdR2zTlsL1eQjU70TLJlbAGmSAL9fz4ps7jHP)

###Koa web api implementation with predefined middlewares for:
- logging,
- error handling,
- model validation
- service registrations:
```javascript
koaApi.use('db', mongodb(connectionString));
```
- route definitions based on folder structure and decorators:

```javascript
@http('get')
@url('/status')
*getStatus() => {
  this.body = 'alive';
  this.status = HttpStatus.OK;
}

@http('patch')
@url('/users/:user_id')
@model('/schemas/user.json')
*patchUser() => {
  var id = this.params.user_id;
  yield this.services['db'].upsert(this.request.body);
  this.status = HttpStatus.OK;
}
```
