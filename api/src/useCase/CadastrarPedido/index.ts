import PedidoService from '../../services/Pedido'
import PedidoDatabase from '../../infra/repository/Pedido/DatabaseRepository'
import { PedidoDTO } from '../../domain/dto/PedidoDTO'

const execute = async (data: PedidoDTO) => {
  const pedidoService = new PedidoService(new PedidoDatabase())
  return pedidoService.create(data)
}
export default execute