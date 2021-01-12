const restify = require('restify');
const swaggerUi = require('swagger-ui-restify');
const swaggerDocument = require('./swagger.json');

const imageControll = require('./image/controll');
const heroesControll = require('./heroes/controll');

const server = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.use(function(req,res,next){
  res.setHeader('content-type','application/json')
	next()
})

server.use((req, res, next) => {
	if (req.url === '/favicon.ico') {
		res.sendFile(__dirname + '/favicon.ico');
	} else if (req.url === '/swagger.json') {
		res.sendFile(__dirname + '/swagger.json');
	} else {
		next();
	}
});

server.post('/image', imageControll.imageVerify);

server.get('/heroes', heroesControll.list);

var options = {
  customCss: '.swagger-ui .topbar { display: none }',
  baseURL: 'api-docs',
};

server.get("/api-docs/*", ...swaggerUi.serve)
server.get('/api-docs', swaggerUi.setup(swaggerDocument, options));

server.listen(8080, function() {
	console.log('%s listening at %s', 'localhost', server.url);
});

