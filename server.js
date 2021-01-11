const restify = require('restify');

const imageControll = require('./image/controll');

const server = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.use(function(req,res,next){
  res.setHeader('content-type','application/json')
	next()
})

server.post('/image', imageControll.imageVerify);

server.listen(8080, function() {
  console.log('%s listening at %s', 'localhost', server.url);
});

