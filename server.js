import pkg from 'json-server'
const { create, router: _router, defaults } = pkg;
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})