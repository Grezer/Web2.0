const fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  logger: true,
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

fastify.get('/', function (req, res) {
  res.sendFile('index.html')
})

fastify.post('/getWords', function (req, res) {
  const directoryPath = path.join(__dirname, 'public/words')
  const { fileName } = req.body
  fs.readdir(directoryPath, (err, files) => {
    if (err) console.log(err)
    if (!files.includes(fileName))
      return res.code(404).send({
        statusCode: 404,
        error: 'File not found',
        message: 'Словарь к указанному символу не найден.',
      })
    res.sendFile(fileName, directoryPath)
  })
})

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
