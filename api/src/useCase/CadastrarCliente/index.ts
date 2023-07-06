import ClienteService from '../../services/Cliente'
import ClienteDatabase from '../../infra/repository/Cliente/DatabaseRepository'
import { ClienteDTO } from '../../domain/dto/ClienteDTO'

const execute = async (data: ClienteDTO) => {
  const clienteService = new ClienteService(new ClienteDatabase())
  return clienteService.create(data)
}
export default execute