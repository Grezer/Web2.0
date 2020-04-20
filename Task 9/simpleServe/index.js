const path = require('path')
const fastify = require('fastify')({
  logger: true,
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

// Declare a route
fastify.get('/', function (req, res) {
  // console.log('req.query: ', req.query.key1)
  // res.send(html.responseText)
  console.log('__dirname: ', __dirname)
  res.sendFile('index.html')
})

fastify.post('/getPage', function (req, res) {
  res.sendFile(req.body.fileName, path.join(__dirname, 'public/pages'))
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})

//   ?key1=true&key2=true&key3=false

/*
const fileName = '0' + req.params.id + '.html'
  res.sendFile(fileName, path.join(__dirname, 'public/pages')) 

  */
