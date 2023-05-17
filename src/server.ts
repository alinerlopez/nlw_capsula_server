import fastify from 'fastify'

const app = fastify()
// metodos http: get para  listar - post para criar algo - put atualizar algo
// patch para atualizar algo especifico - delete para deletar
// 32 minutos de aula
app.get('/hello', () => {
  return 'Hello world'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('👌 HTTP server running on http://localhost:3333')
})