import PedidoService from '../../services/Pedido'
import PedidoDatabase from '../../infra/repository/Pedido/DatabaseRepository'

const execute = async () => {
  const pedidoService = new PedidoService(new PedidoDatabase())
  return pedidoService.index()
}
export default execute