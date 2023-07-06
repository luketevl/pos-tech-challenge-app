import { Router } from 'express'
import CategoriaRoute from './Categoria'
import ClienteRoute from './Cliente'
import ProdutoRoute from './Produto'
import PedidoRoute from './Pedido'

const routes = Router({ mergeParams: true })


routes.use('/categoria', CategoriaRoute)
routes.use('/cliente', ClienteRoute)
routes.use('/produto', ProdutoRoute)
routes.use('/pedido', PedidoRoute)

export default routes