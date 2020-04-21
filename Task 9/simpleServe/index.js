const path = require('path')
const fastify = require('fastify')({
  logger: true,
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

fastify.get('/', function (req, res) {
  console.log('__dirname: ', __dirname)
  res.sendFile('index.html')
})

fastify.post('/getPage', function (req, res) {
  res.sendFile(req.body.fileName, path.join(__dirname, 'public/pages'))
})

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
